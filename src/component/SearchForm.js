import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();
  return (
    <div> <h2>search</h2>
      <form method="get">
        <label>Champion</label><input type="text" value={searchTerm} onChange={setSearchTerm}/>
        <label>Skin</label><input type="text" value={searchTerm} onChange={setSearchTerm}/>
      </form>
    </div>
  );
 
};
export default SearchForm;
