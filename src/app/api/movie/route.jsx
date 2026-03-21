import API from "@/API/api"

export async function GET(req) {
  const { searchParams } = new URL(req.url)

  const page = searchParams.get("page") || 1
  const lang = searchParams.get("lang") || "bn"
  const genre = searchParams.get("genre") || 28

  try {
    const res = await API.get(
      `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genre}&with_original_language=${lang}&page=${page}`
    )

    return Response.json(res.data)
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    )
  }
}