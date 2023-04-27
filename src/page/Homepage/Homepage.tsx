//components
import SearchBar from "./homepage-comps/searchbar";
import FilterButtons from "./homepage-comps/filterbuttons";
import MainGrid from "../MainGrid/MainGrid";
import { SingleItem } from "../SingleItem/SingleItem";

//hooks
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Routes, Route } from "react-router-dom";

function Homepage() {
  const [selectModal, setSelectModal] = useState<boolean>(true);
  const { fetchData, data, filteredData, query, setQuery, setFilterType } = useFetch(
    "http://localhost:3000/posts"
  );

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="Homepage">
      {selectModal ? (
        <div className="Home">
          <SearchBar setQuery={setQuery} setFilterType={setFilterType} />
          <FilterButtons setQuery={setQuery} setFilterType={setFilterType} />
          <MainGrid data={filteredData} setSelectModal={setSelectModal} />
        </div>
      ) : (
        <div className="Modal">
          <Routes>
            <Route
              path="/:id"
              element={
                <SingleItem
                  setQuery={setQuery}
                  data={data}
                  setSelectModal={setSelectModal}
                />
              }
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default Homepage;
