import { useState, ChangeEvent } from "react"

interface SearchProps {
  onSearch:(city:string) => void;
}

export default function Search({onSearch}:SearchProps) {
  const [city, setCity] = useState('')

  function handleChange(event:ChangeEvent<HTMLInputElement>){
    setCity(event.target.value);
  }

  function handleSearch(event:ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    onSearch(city)
  }

  return (
    <>
      <form onSubmit={handleSearch} className="search">
        <input type="text" 
          placeholder="Enter city name" 
          spellCheck='false'
          required
          value={city}
          onChange={handleChange}/>
        <button type="submit"><img src='src/assets/search.png'/></button>
      </form>
    </>
  )
}