import API from "@/API/api";

export async function GET() {
    const res = await API.get(
        `/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )

    return Response.json(res.data)
}