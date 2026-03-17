"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UseMovieTrailer } from "@/hooks/movies"
import { useRouter } from "next/navigation"
import Alert from "./Status_toast"
import Status_toast from "./Status_toast"

export default function Moviecard({ movie, genres }) {
  const router = useRouter()
  const img_url = movie.poster_path === null ? `/No-Image-Placeholder.svg` : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const movieGenres = movie.genre_ids
    .map((id) => genres?.find((g) => g.id === id)?.name)
    .filter(Boolean)
  const { data: trailer, isLoading, isError, refetch } = UseMovieTrailer(movie.id, {
    enabled: false, 
  })
  const showTrailer = async () => {
    try {
      const trailerData = trailer || (await refetch()).data

      if (!trailerData?.url) {
        window.open(`https://www.youtube.com/results?search_query=${movie.title}+movie+trailer`, "_blank")
        return
      }

      window.open(trailerData.url, "_blank")
    } catch (error) {
      console.error("Error fetching trailer:", error)
      alert("Failed to fetch trailer")
    }
  }

  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden h-110">
      {/* Poster as background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img_url})` }}
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-between p-4">
        <CardHeader className="bg-transparent p-0">
          <CardAction>
            <Badge variant="secondary">⭐ {movie.vote_average.toFixed(1)}</Badge>
          </CardAction>

          <CardTitle className="text-white">{movie.title}</CardTitle>

          <div className="flex flex-wrap gap-2 mt-2">
            {movieGenres.map((genre) => (
              <Badge key={genre} variant="outline" className="text-white border-white">
                {genre}
              </Badge>
            ))}
          </div>

          <div className="text-sm text-gray-200 mt-2">
            Release: {movie.release_date}
          </div>
        </CardHeader>

        <CardFooter className="bg-transparent p-0 grid grid-cols-2 gap-2">
          <Button className="bg-white/0 my-2 border border-white text-white hover:bg-white hover:text-black"
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
            View Details
          </Button>
          <Button className="bg-white/0 my-2 border border-white text-white hover:bg-white hover:text-black"
            onClick={() => showTrailer()}
          >
            Trailer
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}