import React from "react";
import "./hero.css";

function Hero({ movie }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>Explore</p>
        <p>What are you gonna watch today?</p>
      </div>

      {movie ? (
        <>
          {/* Ảnh banner */}
          <img src={movie.banner} alt={movie.movieName} className="hero-bg" />
          <div className="hero-overlay">
            <h1 className="hero-title">{movie.movieName}</h1>
            <p className="hero-desc">{movie.description}</p>
          </div>
        </>
      ) : (
        <>
          {/* Khi chưa chọn phim */}
          <img
            src="/data/spy_carousel1.png"
            alt="Hero Banner"
            className="hero-bg"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Weather With You</h1>
            <p className="hero-desc">
              Corrupt politicians, frenzied nationalists, and other warmongering
              forces constantly jeopardize the thin veneer of peace between
              neighboring countries Ostania and Westalis.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
