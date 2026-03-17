"use client"

import { Movie_carousel } from "@/components/Movie_carousel";
import Movie_container from "@/components/Movie_container";
import QueryProvider from "@/providers/QueryProvider";


export default function Home() {
  return (
      <main>
        <Movie_carousel />
        <Movie_container/>
      </main >
  );
}
