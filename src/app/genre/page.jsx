"use client"
import { Button } from "@/components/ui/button"
import { UseMovieGenre } from "@/hooks/movies"
import { useRouter } from "next/navigation"

export default function Genre() {
    const router = useRouter()
    const { data: genre, isLoading, isError } = UseMovieGenre()
    return (
        <main
            className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-10 my-2 pb-6"
        >
            {
                genre?.genres?.map(
                    (genre) => <Button key={genre.id}
                        onClick={
                            () => router.push(`/movie/genre/${genre.id}`)
                        }
                        className="bg-primary text-background p-6 rounded-2xl text-2xl cursor-pointer text-center hover:"
                    >
                            {genre.name}
                        </Button>
                        
                )
            }
        </main>
    )
}