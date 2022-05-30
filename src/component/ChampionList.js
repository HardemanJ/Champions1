import React from "react";
import Champion from "./Champion";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const ChampionList = () => {
  const { champions, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (champions.length < 1) {
    <h2 className="section-title">no champs matched your search criteria</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Champions</h2>
      <div className="champions-center">
        {champions.map((item) => {
          return <Champion key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ChampionList;
