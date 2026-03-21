"use client"
import Loading from "@/components/Loading";
import Movie_container from "@/components/Movie_container";
import Moviecard from "@/components/MovieCard";
import MoviePagination from "@/components/MoviePagination";
import { UseMovieByGenre } from "@/hooks/movies";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Movies_by_genre() {
    var { id } = useParams()
    const [page, setPage] = useState(1)
    const { data: movies, isLoading } = UseMovieByGenre(id, page)
    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <Movie_container movies={movies} />
            {movies?.total_pages > 1 && <MoviePagination page={page} setPage={setPage} totalPages={movies.total_pages} />}

        </div>
    )
}