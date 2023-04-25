//components
import SearchBar from "./homepage-comps/searchbar"
import FilterButtons from "./homepage-comps/filterbuttons"
import MainGrid from "../MainGrid/MainGrid"

//hooks
import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"

function Homepage() {
   const [query, setQuery] = useState<string>('')
   const {fetchData, data} = useFetch("http://localhost:3000/posts?" + query)

   useEffect(() => {
      fetchData()

   },[query])

   console.log(query);
   

   return (
      <div className="">
         <SearchBar setQuery={setQuery}/>
         <FilterButtons setQuery={setQuery}/>
         <MainGrid data={data}/>
         </div>
   )
}

export default Homepage
