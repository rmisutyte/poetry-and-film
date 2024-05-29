import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const perPage = request.nextUrl.searchParams.get("per_page") || "10";
  const page = request.nextUrl.searchParams.get("page") || "1";
  const pageNumber = parseInt(page, 10);
  const perPageNumber = parseInt(perPage, 10);
  const skip = (pageNumber - 1) * perPageNumber;

  const client = new MongoClient(process.env.MONGODB_URI!);
  try {
    await client.connect();
    const database = client.db("poems-and-film");
    const collection = database.collection("photos");
    const data = await collection
      .find({})
      .skip(skip)
      .limit(perPageNumber)
      .toArray();
    return Response.json(data);
  } catch (error) {
    Response.error();
  }
}
