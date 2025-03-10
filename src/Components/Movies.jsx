import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../Context/MovieContext";

const Movies = ({ pageNo, setTotalPages }) => {
  const [movies, setMovies] = useState([]);
  const { setWatchlist, addToWatchlist, removeFromWatchlist } =
    useContext(MovieContext);

  useEffect(() => {
    let watchList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(watchList);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function getNowPlaying() {
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
        //cleanup
        console.log("cleaning up before next api call");
        //abort the request being made
        //abort controller
        // if (error.name == "AbortError") alert("Aborted!");
        if (error.name == "AbortError") console.log("Abouted!");
      }
    }

    getNowPlaying();

    return () => {
      controller.abort();
    };
  }, [pageNo]);

  return (
    <div>
      <h1 className="text-2xl text-left font-bold"> Trending Movies </h1>
      <div className="my-10 flex flex-wrap justify-evenly gap-20">
        {movies == null ? (
          <h3>Loading...</h3>
        ) : (
          movies.map((movie, idx) => {
            return (
              <MovieCard
                key={idx}
                movie={movie}
                idx={idx}
                addToWatchlist={addToWatchlist}
                removeFromWatchlist={removeFromWatchlist}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Movies;
