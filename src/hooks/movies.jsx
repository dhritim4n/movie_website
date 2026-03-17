"use client"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
 
 const useTrendingMovies = (page = 1) => {
    return useQuery({
        queryKey: ['popular-movies', page],
        queryFn: async () => {
            var res = await axios.get(`/api/movie/popular?page=${page}`)

            return res.data
        }
    })
 }

 const UseMovieTrailer = (id) => {
    return  useQuery({
        queryKey: ['movie-trailer', id],
        queryFn: async () => {
            const res = await axios.get(`/api/movie/${id}/trailer`)
            return res.data
        }

    })
 }

const UseMovieGenre = () => {
    return useQuery(
        {
            queryKey: ["movie-genre"],
            queryFn: async () => {
                const res = await axios.get(`/api/movie/genre`)
                return res.data
            }
            
        }
    )
}

const UseMovieDetails = (id) => {
    return useQuery(
        {
            queryKey: ["movie-details", id],
            queryFn: async () => {
                const res = await axios.get(`/api/movie/${id}`)
                return res.data
            }
            
        }
    )
}

const UseSearchMovie = (q, page) => {
    return useQuery(
        {
            queryKey: ["movie-search", q, page],
            queryFn: async () => {
                const res = await axios.get(`/api/movie/search?q=${q}&page=${page}`)
                return res.data
            }
            
        }
    )
}

export {
    useTrendingMovies,
    UseMovieTrailer,
    UseMovieGenre,
    UseSearchMovie,
    UseMovieDetails
}