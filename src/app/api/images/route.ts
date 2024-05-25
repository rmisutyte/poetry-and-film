import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  const perPage = request.nextUrl.searchParams.get("per_page");
  const page = request.nextUrl.searchParams.get("page");
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&orientation=squarish`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_API_ACCESS_KEY}`,
      },
    }
  );

  const data = await response.json();
  return Response.json(data);
}
