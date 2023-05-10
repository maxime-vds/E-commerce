import searchIcon from '/icons/search.svg'

type SearchBarProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>
  setFilterType: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({ setQuery, setFilterType }: SearchBarProps) {
  return (
    <div className="searchbar-wrapper flex justify-around lg:justify-end lg:space-x-2 lg:px-40 border-[1px] border-solid py-2">
      <input
        type="text"
        onChange={(e) => (setQuery(e.target.value), setFilterType('searchbar'))}
        placeholder="I'm looking for..."
        className="font-montserrat border-solid border-[1px] border-slate-200 px-8 lg:pe-44 py-2 placeholder-black
                focus:border-slate-900 focus:outline-none focus:px-12 focus:lg:px-[180px] focus:transition-all duration-300 ease-in-out"
      />
      <img src={searchIcon} />
    </div>
  )
}

export default SearchBar
