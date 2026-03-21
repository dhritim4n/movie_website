import API from "@/API/api";

export async function GET(req, {params}) {
    var {id} = await params
    var page =  new URL(req.url).searchParams.get("page")
    if(!page) page = 1 
    const res = await API.get(
        `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${id}&page=${page}`
    )
    return Response.json(res.data)
}