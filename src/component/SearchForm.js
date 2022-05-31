import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm  } = useGlobalContext();
  const handleSubmit= e=>{e.preventDefault()}
  return (
    <div> 
      <h2>search</h2>
      <form onSubmit={handleSubmit
      }>
        <label>Champion</label>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
      </form>
    </div>
  );
 
};
export default SearchForm;
