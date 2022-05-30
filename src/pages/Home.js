import React from "react";
import ChampionList from "../component/ChampionList";
import SearchForm from "../component/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <ChampionList />
    </main>
  );
};

export default Home;
