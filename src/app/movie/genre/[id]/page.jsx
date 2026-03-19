"use client"
import Loading from "@/components/Loading";
import Movie_container from "@/components/Movie_container";
import Moviecard from "@/components/MovieCard";
import { UseMovieByGenre } from "@/hooks/movies";
import { useParams, useSearchParams } from "next/navigation";

export default function Movies_by_genre(){
    var {id} = useParams()
    var searchParams = useSearchParams()
    var page = searchParams.get("page")
    if(!page) page = 1
    const {data:movies ,isLoading} = UseMovieByGenre(id,page)
    if(isLoading){
        return(
            <Loading/>
        )
    }
    return(
        <div>
            <Movie_container movies={movies} />
        </div>
    )
}