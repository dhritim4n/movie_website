"use client"
import { Suspense, useState } from "react"
import Loading from "@/components/Loading"
import Movie_container from "@/components/Movie_container"
import MoviePagination from "@/components/MoviePagination"
import { UseMovie } from "@/hooks/movies"
import { useSearchParams } from "next/navigation"

function MoviesContent() {
  const searchParams = useSearchParams()
  const lang = searchParams.get("lang") || "bn"
  const genre = searchParams.get("genre") || 28

  const [page, setPage] = useState(1)

  const { data: movies, isLoading, isError } = UseMovie(genre, lang, page)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load movies
      </div>
    )
  }

  return (
    <div>
      <Movie_container movies={movies} />

      {movies?.total_pages > 1 && (
        <MoviePagination
          page={page}
          setPage={setPage}
          totalPages={movies.total_pages}
        />
      )}
    </div>
  )
}

export default function BrowseMovies() {
  return (
    <Suspense fallback={<Loading />}>
      <MoviesContent />
    </Suspense>
  )
}