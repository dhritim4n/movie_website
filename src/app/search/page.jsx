"use client"

import Loading from "@/components/Loading"
import Movie_container from "@/components/Movie_container"
import { UseSearchMovie } from "@/hooks/movies"
import { useSearchParams } from "next/navigation"

export default function SearchPg() {
    const searchParams = useSearchParams()
    var q = searchParams.get('q')
    if(!q) q=""
    var page = searchParams.get('page')
    if (!page) page = 1
    const { data: movies, isLoading } = UseSearchMovie(q, page)
    
    if(isLoading){
        return(
            <Loading/>
        )
    }
    return (
            <main>
                <Movie_container movies={movies}/>
            </main>
    )

}