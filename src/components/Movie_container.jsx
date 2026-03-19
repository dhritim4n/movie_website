"use client"

import { UseMovieGenre, useTrendingMovies } from "@/hooks/movies"
import { useState } from "react"
import Moviecard from "./MovieCard"

export default function Movie_container({movies}){
    const {data: genre} = UseMovieGenre()
    return(
        <div>
            <div
                className="grid md:grid-cols-3 gap-5 px-4 py-4" 
            >
                {
                     movies?.results?.map(
                        (movie) => <Moviecard key={movie.id} movie={movie} genres={genre?.genres}/> 
                    )
                }
            </div>
        </div>
    )
}