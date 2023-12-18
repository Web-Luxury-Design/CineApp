import React from "react";

const Card = ({ film }) => {
  return (
    <li className="card">
      <div className="img">
        <img
          src={"https://image.tmdb.org/t/p/original/" + film.backdrop_path}
          alt=""
        />
      </div>
      <h1>{film.title}</h1>
      <p className="date">sorti le {film.release_date}</p>
      <p className="note">
        {film.vote_average}/10{" "}
        <i class="fa-solid fa-star" style={{ color: "#b1f41f" }}></i>
      </p>
      <div className="film-genre"></div>
      <div className="synopsis">
        <div className="title">
          <h3>Synopsis</h3>
        </div>
        <p>{film.overview}</p>
      </div>
    </li>
  );
};

export default Card;
