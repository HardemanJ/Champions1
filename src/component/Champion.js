import React from "react";
// import rappel from "./../championData";

const iconChampion =
  "http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/";

const Champion = ({ id, title, tags, image }) => {
  // console.log(full);
  return (
    <article className="champion">
      <div className="img-container">
        <img src={`${iconChampion}${image.full}`} alt={id} />
      </div>
      <h2>{id}</h2>
    </article>
  );
};

export default Champion;
