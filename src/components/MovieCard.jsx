import React from "react";
import "./MovieCard.css";

function MovieCard({ title, img, episode, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <div className="movie-img-container">
        <img src={img} alt={title} className="movie-img" />
        <p className="movie-episode">Episode {episode}</p>
      </div>
      <h4 className="movie-title">{title}</h4>
    </div>
  );
}

export default MovieCard;
