"use client"

import Moviecard from "@/components/MovieCard"
import { UseSearchMovie, useTrendingMovies } from "@/hooks/movies"
import QueryProvider from "@/providers/QueryProvider"
import { useSearchParams } from "next/navigation"

export default function SearchPg() {
    const searchParams = useSearchParams()
    const q = searchParams.get('q')
    var page = searchParams.get('page')
    if (!page) page = 1
    const { data: movie } = UseSearchMovie(q, page)
    return (
            <main>
                <div className="grid gap-4 mx-5 md:grid-cols-3">
                {
                    movie?.results?.map(
                        (movie) => <Moviecard movie={movie} key={movie.id}/>
                    )
                }
                </div>
            </main>
    )

}