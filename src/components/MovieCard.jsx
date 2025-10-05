import React from "react";
import "./MovieCard.css";

function MovieCard({ title, img, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}

export default MovieCard;
