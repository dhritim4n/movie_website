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
import Loading from "./Loading"


export function Movie_carousel() {

  const { data, isLoading, isError } = useTrendingMovies();
  const results = data?.results ?? [];

  if(isLoading) <Loading/>
  return (
    <div className="overflow-hidden px-2 mx-2">
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