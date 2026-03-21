"use client"
import { Button } from "@/components/ui/button"
import { UseMovieGenre } from "@/hooks/movies"
import { useRouter } from "next/navigation"
import { useState } from "react"

const languages = [
  { label: "Hindi", code: "hi" },
  { label: "Bengali", code: "bn" },
  { label: "Marathi", code: "mr" },
  { label: "Tamil", code: "ta" },
  { label: "Telugu", code: "te" },
  { label: "Malayalam", code: "ml" },
  { label: "Kannada", code: "kn" },
  { label: "Gujarati", code: "gu" },
  { label: "Punjabi", code: "pa" },
  { label: "Odia", code: "or" },
  { label: "Assamese", code: "as" },

  { label: "English", code: "en" },
  { label: "Spanish", code: "es" },
  { label: "French", code: "fr" },
  { label: "German", code: "de" },
  { label: "Italian", code: "it" },
  { label: "Japanese", code: "ja" },
  { label: "Korean", code: "ko" },
  { label: "Chinese", code: "zh" },
  { label: "Russian", code: "ru" },
  { label: "Arabic", code: "ar" },
]

export default function Genre() {
  const router = useRouter()

  const [filter, setFilter] = useState({
    genre: "",
    lang: "",
    page: 1,
  })

  const { data: genre, isLoading, isError } = UseMovieGenre()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500 text-lg">
        Loading genres...
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-40 text-red-500 text-lg">
        Failed to load genres
      </div>
    )
  }

  return (
    <main className="mx-6 md:mx-12 my-6 pb-10 space-y-8">

      <div>
        <h2 className="text-xl font-bold mb-4">Select Genre</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {genre?.genres?.map((g) => (
            <Button
              key={g.id}
              onClick={() => setFilter({ ...filter, genre: g.id })}
              className={`
                px-6 py-4 rounded-xl text-lg font-semibold
                transition-all duration-200

                ${filter.genre === g.id
                  ? "bg-primary text-white scale-105 shadow-lg"
                  : "bg-gray-200 text-black hover:bg-gray-300"}
              `}
            >
              {g.name}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Select Language</h2>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              onClick={() => setFilter({ ...filter, lang: lang.code })}
              className={`
                px-5 py-3 rounded-lg text-md font-medium
                transition-all duration-200

                ${filter.lang === lang.code
                  ? "bg-primary text-white scale-105"
                  : "bg-gray-200 text-black hover:bg-gray-300"}
              `}
            >
              {lang.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-6">
        <Button
          disabled={!filter.genre || !filter.lang}
          onClick={() =>
            router.push(
              `/movie?genre=${filter.genre}&lang=${filter.lang}&page=1`
            )
          }
          className="
            px-10 py-5 text-lg font-bold rounded-xl
            bg-green-600 text-white

            hover:bg-green-700
            hover:scale-105
            transition-all duration-200

            disabled:bg-gray-400 disabled:cursor-not-allowed
          "
        >
          Find Movies 🎬
        </Button>
      </div>

    </main>
  )
}