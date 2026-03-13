import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=904164463f897ff2cdc1dc0d24eba8fd&language=en-US&page=1";
      const results = (await axios.get(url)).data.results.slice(0, 5);
      setMovies(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [movies]);

  if (movies.length === 0) return null;

  const movie = movies[current];

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        width: "100%",
        height: "550px",
        transition: "background-image 0.8s ease-in-out",
      }}
      className="my-10 bg-cover bg-center text-left text-white relative"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Movie info */}
      <div className="absolute bottom-10 left-6 z-10">
        <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm max-w-lg text-gray-300 line-clamp-2">
          {movie.overview}
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {movies.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white w-4" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
