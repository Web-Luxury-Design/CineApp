import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

const Search = () => {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=aaa9dd0754978abcfdface154eb3a4a0&query=code&language=fr-FR"
      )
      .then((res) => setFilmData(res.data.results));
  }, []);

  return (
    <div className="search">
      <div className="search-container">
        <div className="input-search">
          <input type="text" placeholder="nom de film" />
          <input type="submit" value="Rechercher" />
        </div>
        <div className="rank">
          <button>
            top <i className="fa-solid fa-arrow-up-long"></i>
          </button>
          <button>
            flop <i className="fa-solid fa-arrow-down-long"></i>
          </button>
        </div>
      </div>
      <div className="cards-container">
        <ul>
          {filmData.map((film) => (
            <li>
              <Card key={film.id} film={film} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
