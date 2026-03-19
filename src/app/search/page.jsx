"use client"

import { Suspense } from "react"
import Loading from "@/components/Loading"
import Movie_container from "@/components/Movie_container"
import { UseSearchMovie } from "@/hooks/movies"
import { useSearchParams } from "next/navigation"

export const dynamic = "force-dynamic";

function SearchContent() {
    const searchParams = useSearchParams()

    let q = searchParams.get("q") || ""
    let page = searchParams.get("page") || 1

    const { data: movies, isLoading } = UseSearchMovie(q, page)

    if (isLoading) return <Loading />

    return <Movie_container movies={movies} />
}

export default function SearchPg() {
    return (
        <Suspense fallback={<Loading />}>
            <SearchContent />
        </Suspense>
    )
}