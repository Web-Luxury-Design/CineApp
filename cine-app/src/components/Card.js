import React, { useEffect } from "react";

const Card = ({ film }) => {
  const dateFormat = (date) => {
    let [yy, mm, jj] = date.split("-");
    return [jj, mm, yy].join("/");
  };

  const GenreMovie = () => {
    let genreArray = [];
    for (let i = 0; i < film.genre_ids.length; i++) {
      switch (film.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Aventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comédie");
          break;
        case 80:
          genreArray.push("Crime");
          break;
        case 99:
          genreArray.push("Documentaire");
          break;
        case 18:
          genreArray.push("Drame");
          break;
        case 10751:
          genreArray.push("Famille");
          break;
        case 14:
          genreArray.push("Fantaisie");
          break;
        case 36:
          genreArray.push("Histoire");
          break;
        case 27:
          genreArray.push("Horreur");
          break;
        case 10402:
          genreArray.push("Musique");
          break;
        case 9648:
          genreArray.push("Mystère");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science-Fiction");
          break;
        case 10770:
          genreArray.push("TV Film");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("Guerre");
          break;
        case 37:
          genreArray.push("western");
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };
  return (
    <li className="card">
      <div className="img">
        <img
          src={
            film.backdrop_path
              ? "https://image.tmdb.org/t/p/original/" + film.backdrop_path
              : "./img/poster.jpg"
          }
          alt=""
        />
      </div>
      <h1>{film.title}</h1>
      <p className="date">sorti le {dateFormat(film.release_date)}</p>
      <p className="note">
        {film.vote_average}/10{" "}
        <i className="fa-solid fa-star" style={{ color: "#b1f41f" }}></i>
      </p>
      <ul className="film-genre">{film.genre_ids ? GenreMovie() : null}</ul>
      <div className="synopsis">
        <div className="title">
          <h3>Synopsis</h3>
        </div>
        <p>{film.overview}</p>
      </div>
      <div className="button">
        <button>coup de coeur</button>
      </div>
    </li>
  );
};

export default Card;
