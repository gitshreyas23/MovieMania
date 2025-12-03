import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center mt-10 mx-40">
        {movieData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
