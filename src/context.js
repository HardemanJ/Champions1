import React, { useState, useContext, useEffect, createContext } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [champions, setChampions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchChampions = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/12.8.1/data/fr_FR/champion.json`
      );
      const { data } = await response.json();
      const championList = Object.values(data).map((key) => {
        return key
      });
      const newSearchChampion = championList.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setChampions(newSearchChampion);
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
