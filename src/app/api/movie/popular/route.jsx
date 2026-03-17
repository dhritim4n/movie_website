import API from "@/API/api";

export async function GET(req) {
  const { searchParams } = new URL(req.url) 
  var page = searchParams.get('page')
  if(!page) page = 1
  const res = await API.get(
    `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_original_language=hi&primary_release_date.gte=2025-01-01&page=${page}`
  );

  return Response.json(res.data);
}