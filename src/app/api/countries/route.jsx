import API from "@/API/api";

export async function GET(){
    const res = await API.get(
        `/configuration/countries?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    if(res.status === 200) return Response.json(res.data)

}