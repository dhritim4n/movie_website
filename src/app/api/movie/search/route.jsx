import API from "@/API/api"

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const  q  =  searchParams.get("q")
    var page = searchParams.get("page")
    if(!page) page = 1
    const res = await API.get(
        `/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${q}&page=${page}`
    )

    return Response.json(res.data)
}