import React, { useEffect, useState } from "react";

const Movie = ({ movie }) => {
  return (
    <div className="">
      <h1>{movie.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt=""
        className="w-300 rounded-sm"
      />
    </div>
  );
};

export default Movie;
