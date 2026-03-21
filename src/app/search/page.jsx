"use client"

import { Suspense, useState } from "react"
import Loading from "@/components/Loading"
import Movie_container from "@/components/Movie_container"
import { UseSearchMovie } from "@/hooks/movies"
import { useSearchParams } from "next/navigation"
import MoviePagination from "@/components/MoviePagination"


function SearchContent() {
    const searchParams = useSearchParams()
    const [page, setPage] = useState(1)
    let q = searchParams.get("q") || ""

    const { data: movies, isLoading, isFetching } = UseSearchMovie(q, page)

    if (isLoading || isFetching){
        return (
            <>
                <Loading />
            </>
        ) 
    } 

    return (
        <>
            <Movie_container movies={movies} />
            {movies?.total_pages > 1 && <MoviePagination page={page} setPage={setPage} totalPages={movies.total_pages} />}
        </>
    )
}

export default function SearchPg() {
    return (
        <Suspense fallback={<Loading />}>
            <SearchContent />
        </Suspense>
    )
}