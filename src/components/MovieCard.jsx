import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="h-auto p-4 m-4 rounded-lg shadow-md w-64 hover:shadow-xl transition-all duration-300">
      <img src={movie.image.medium} className="w-full h-64 object-cover rounded-md mb-4" />

      <h1>Title : {movie.name}</h1>
      <p>Rating : {movie.rating?.average || "N/A"}</p>
      <p>Genre : {movie.genres.join(", ")}</p>
    </div>
  );
};

export default MovieCard;
