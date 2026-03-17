"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { movies } from "@/data/movies"
import Movie_carousel_card from "./Movie_carousel_card"
import { UseMovieTrailer, useTrendingMovies } from "@/hooks/movies"
import Autoplay from "embla-carousel-autoplay"


export function Movie_carousel() {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)


  const { data, isLoading, isError } = useTrendingMovies();
  const results = data?.results ?? [];

  return (
    <div className="mx-auto overflow-hidden px-2">
      <Carousel className="" plugins={[Autoplay({
        delay: 4000,
      }),]}>
        <CarouselContent>
          {results?.map((movie) => (
            <CarouselItem key={movie.id} className="overflow-hidden">
              <Movie_carousel_card movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}