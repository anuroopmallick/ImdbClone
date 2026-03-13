import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../Context/MovieContext";

const Movies = ({ pageNo, setTotalPages }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setWatchlist, addToWatchlist, removeFromWatchlist } =
    useContext(MovieContext);

  useEffect(() => {
    let watchList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(watchList);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function getNowPlaying() {
      setLoading(true);
      try {
        let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNo}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDQxNjQ0NjNmODk3ZmYyY2RjMWRjMGQyNGViYThmZCIsIm5iZiI6MTc0MDc1NTcwMi4zMzYsInN1YiI6IjY3YzFkMmY2OWFkY2QyNTYyNTM1YzQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BapZAqewJfKdhB3hx9yvXhIrQhuxu95f-4vHeitt--0`,
          },
          signal: controller.signal,
        };
        let resp = await fetch(url, options);
        let data = await resp.json();
        setMovies(data.results);
        setTotalPages(data.results[0].total_pages);
      } catch (error) {
        if (error.name === "AbortError") console.log("Aborted!");
      } finally {
        setLoading(false);
      }
    }

    getNowPlaying();
    return () => controller.abort();
  }, [pageNo]);

  return (
    <div className="px-8 py-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-7 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
        <h1 className="text-2xl font-bold text-white">Now Playing</h1>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-700 rounded-xl h-64 w-full mb-3" />
                <div className="bg-gray-700 rounded h-4 w-3/4 mb-2" />
                <div className="bg-gray-700 rounded h-3 w-1/2" />
              </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie, idx) => (
            <MovieCard
              key={idx}
              movie={movie}
              idx={idx}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
