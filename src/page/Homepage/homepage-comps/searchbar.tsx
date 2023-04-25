import searchIcon from '/search.svg'




function SearchBar() {
    return (
        <div className="searchbar-wrapper flex justify-around border-[1px] border-solid py-2">
            <input
                type="text"
                placeholder="I'm looking for..."
                className="placeholder-ps-1 border-solid border-[1px] border-slate-200 px-8 py-2 placeholder-slate-600 
                focus:border-slate-900 focus:outline-none focus:px-12 focus:transition-all duration-300 ease-in-out" 
            />
            <img src={searchIcon}></img>
        </div>
    )
}

export default SearchBar
