import { MongoClient } from "mongodb";
import { S3Client, HeadObjectCommand } from "@aws-sdk/client-s3";

export const handler = async (event) => {
  const record = event.Records[0];

  const client = new S3Client({});
  const command = new HeadObjectCommand({
    Bucket: record.s3.bucket.name,
    Key: record.s3.object.key,
  });
  const response = await client.send(command);
  console.log(response.Metadata.name);

  const item = {
    name: response.Metadata.name,
    tag: record.s3.object.eTag,
    imageUrl: `${process.env.BASE_ASSETS_URL}/${record.s3.object.key}`,
  };

  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const database = client.db(process.env.MONGODB_NAME);
    const collection = database.collection(process.env.MONGODB_COLLECTION_NAME);
    const existingItem = await collection.find({ tag: item.tag }).toArray();

    existingItem.length === 0
      ? await collection.insertOne(item)
      : await collection.updateOne(
          { tag: item.tag },
          {
            $set: {
              name: item.name,
              tag: item.tag,
              imageUrl: item.imageUrl,
            },
          }
        );
  } catch (err) {
    console.log(
      "There was an error creating or updating an item to MnogoDB",
      err
    );
  }
};
