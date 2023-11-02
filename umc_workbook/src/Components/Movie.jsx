import React from "react";
import Detail from "./Detail";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, detail }) {
  return (
    <div id="mc" className="movie-container">
      <img src={IMG_BASE_URL + poster_path} alt="영화 포스터" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      <Detail title={title} detail={detail} />
    </div>
  );
}
