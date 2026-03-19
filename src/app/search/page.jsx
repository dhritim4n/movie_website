"use client"

import Movie_container from "@/components/Movie_container"
import { UseMovieGenre, UseSearchMovie, useTrendingMovies } from "@/hooks/movies"
import { useSearchParams } from "next/navigation"

export default function SearchPg() {
    const searchParams = useSearchParams()
    const q = searchParams.get('q')
    var page = searchParams.get('page')
    if (!page) page = 1
    const { data: movies } = UseSearchMovie(q, page)
    const {data: genre} = UseMovieGenre()
    return (
            <main>
                <Movie_container movies={movies}/>
            </main>
    )

}