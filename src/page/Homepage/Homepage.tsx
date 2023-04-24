
//components
import SearchBar from "./homepage-comps/searchbar"
import FilterButtons from "./homepage-comps/filterbuttons"
import MainGrid from "../MainGrid/MainGrid"

function Homepage() {
   return (
      <div className="">
         <SearchBar/>
         <FilterButtons/>
         <MainGrid/>
         </div>
   )
}

export default Homepage
