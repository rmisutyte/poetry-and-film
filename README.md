# Poems & Film app

The app is deployed to https://www.poems-and-film.com

## Local development

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

App is deployed to production on every merge to `main`.

## Photo upload

Photos are uploaded directly to S3.
There is a lambda function that uploads those photos to MongoDB as soon as they are uploaded or updated on the S3. Lambda's code can be found [here](./lambda-functions/upload-data-to-mongo-db/README.md)
