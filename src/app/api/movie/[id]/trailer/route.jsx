import API from "@/API/api"

export async function GET(req, {params}){
    const {id} = await params
    console.log(id)
    const res = await API.get(
        `/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
     const trailer = res.data.results.filter(
       r => r.type === "Trailer" && r.official === true
    )
    if(!trailer.length) return Response.json(res.data)
    return Response.json({url: `https://www.youtube.com/watch?v=${trailer[trailer.length - 1].key}`})
    
}