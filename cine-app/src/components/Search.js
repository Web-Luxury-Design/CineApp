import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Search = () => {
  const [filmData, setFilmData] = useState([]);
  const [inputText, setInputText] = useState("code");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=aaa9dd0754978abcfdface154eb3a4a0&query=${
          inputText ? inputText : "code"
        }&language=fr-FR`
      )
      .then((res) => setFilmData(res.data.results));
  }, [inputText]);

  const [sortGoodBad, setSortGoodBad] = useState("");

  return (
    <div className="search">
      <div className="search-container">
        <div className="input-search">
          <input
            type="text"
            placeholder="nom de film"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <input type="submit" value="Rechercher" />
        </div>
        <div className="rank">
          <button
            onClick={() => {
              setSortGoodBad("goodtobad");
            }}
          >
            top
            <i className="fa-solid fa-arrow-up-long"></i>
          </button>
          <button
            onClick={() => {
              setSortGoodBad("badtogood");
            }}
          >
            flop
            <i className="fa-solid fa-arrow-down-long"></i>
          </button>
        </div>
      </div>
      <div className="cards-container">
        <ul>
          {filmData
            .sort((a, b) => {
              if (sortGoodBad == "goodtobad") {
                return b.vote_average - a.vote_average;
              } else if (sortGoodBad == "badtogood") {
                return a.vote_average - b.vote_average;
              }
            })
            .map((film) => (
              <Card key={film.id} film={film} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
