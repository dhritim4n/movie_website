"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { UseMovieTrailer } from "@/hooks/movies"

export default function Movie_carousel_card({ movie }) {
  const image = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/hero-fallback.jpg"

  const { data: trailer, refetch } = UseMovieTrailer(movie.id, {
    enabled: false,
  })

  const showTrailer = async (title) => {
    try {
      const trailerData = trailer || (await refetch()).data

      if (!trailerData?.url) {
        window.open(
          `https://www.youtube.com/results?search_query=${title}+movie+trailer`,
          "_blank"
        )
        return
      }

      window.open(trailerData.url, "_blank")
    } catch (error) {
      console.error("Error fetching trailer:", error)
      alert("Failed to fetch trailer")
    }
  }

  return (
    <Card className="relative h-[max(90vh,400px)] rounded-2xl md:rounded-3xl shadow-lg bg-background text-foreground overflow-hidden">

      {/* Background image */}
      <img
        src={image}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />

      {/* Content */}
      <CardContent className="relative z-10 flex flex-col justify-end h-full 
        p-4 sm:p-6 md:p-12 
        max-w-full sm:max-w-2xl md:max-w-4xl 
        space-y-3 sm:space-y-4">

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white line-clamp-2">
          {movie.title}
        </h1>

        {/* Overview */}
        <p className="text-sm sm:text-base text-gray-300 line-clamp-2 sm:line-clamp-3">
          {movie.overview}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-400">
          <span>{movie.release_date}</span>
        </div>

        {/* Buttons */}
        <CardFooter className="relative z-20 bg-black/40 rounded-lg 
          p-2 sm:p-3 md:p-4 
          flex flex-col sm:flex-row gap-2 sm:gap-4 
          w-full sm:w-fit">

          <button
            onClick={()=>showTrailer(movie.title)}
            className="flex items-center justify-center gap-2 
              bg-red-600 px-4 py-2 sm:px-5 sm:py-2.5 
              rounded-lg font-semibold hover:opacity-90 
              transition text-white text-sm sm:text-base w-full sm:w-auto">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Trailer
          </button>

          <button className="flex items-center justify-center gap-2 
            bg-gray-200 px-4 py-2 sm:px-5 sm:py-2.5 
            rounded-lg font-semibold hover:bg-gray-300 
            transition text-gray-900 text-sm sm:text-base w-full sm:w-auto">
            <span className="text-lg sm:text-xl font-bold">+</span>
            Watchlist
          </button>

        </CardFooter>
      </CardContent>
    </Card>
  )
}

export {
  showTrailer
}