import API from "@/API/api";

export async function GET(req, {params}) {
  
  const {id} = await params
  try {
    
    const res = await API.get(
      `/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    return new Response(JSON.stringify(res.data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const status = err.response?.status || 500;
    return new Response(
      JSON.stringify({ error: err.response?.data?.status_message || "API Error" }),
      { status, headers: { "Content-Type": "application/json" } }
    );
  }
}