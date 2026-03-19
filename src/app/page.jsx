"use client"

import Loading from "@/components/Loading";
import { Movie_carousel } from "@/components/Movie_carousel";
import Movie_container from "@/components/Movie_container";
import { UseMovieGenre, useTrendingMovies } from "@/hooks/movies";
import QueryProvider from "@/providers/QueryProvider";


export default function Home() {
  const {data: movies, isLoading} = useTrendingMovies()
  
  if(isLoading){
    return(
      <Loading/>
    )
  }
  return (
      <main>
        <Movie_carousel />
        <Movie_container movies={movies} />
      </main >
  );
}
