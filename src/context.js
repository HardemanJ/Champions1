import React, { useState, useContext, useEffect, createContext } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [champions, setChampions] = useState([]);
  // const [search] = useState([]) ;

  const fetchChampions = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json`
      );
      const { data } = await response.json();
      const championList = Object.values(data).map((key) => {
        const {
          id,
          title,
          tags,
          image: { full },
        } = key;
        return { id, title, tags, full };
      });
     const newChampionList = championList.filter((item) => item.includes(searchTerm))
      setChampions(newChampionList);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChampions();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, searchTerm, champions, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
  };

//make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// export { AppContext, AppProvider };
