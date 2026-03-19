"use client"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function Movie_search() {
  const [searchq, setSearchq] = useState('')
  const router = useRouter()
  const handleSearch = () => {
    if(searchq!=='') router.push(`/search?q=${searchq}`)
    setSearchq('')
  }


  return (
    <Field>
      <ButtonGroup>
        <Input id="input-button-group" value={searchq} onKeyDown={(e) => e.key=="Enter" && handleSearch()} onChange={(e) => setSearchq(e.target.value)} placeholder="Enter Movie Name..." />
        <Button variant="outline" onClick={() => handleSearch()}>Search</Button>
      </ButtonGroup>
    </Field>
  )
}
