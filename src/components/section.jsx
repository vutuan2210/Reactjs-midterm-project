import React from "react";
import MovieCard from "./MovieCard";
import "./Section.css";
import movies from "../data/movies";

function Section({ title, onSelectMovie }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="movie-row">
        {movies.map((m, i) => (
          <MovieCard
            key={i}
            title={m.movieName}
            img={m.poster}
            onClick={() => onSelectMovie(m)}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
