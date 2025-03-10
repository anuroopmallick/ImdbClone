import React, { useState, useEffect } from "react";
export const MovieContext = React.createContext();

const MovieContextWrapper = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    let watchList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(watchList);
  }, []);

  function addToWatchlist(movie) {
    let updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  }

  function removeFromWatchlist(movie) {
    let filteredMovies = watchlist.filter((mov) => mov.id != movie.id);
    setWatchlist(filteredMovies);
    localStorage.setItem("watchlist", JSON.stringify(filteredMovies));
  }

  return (
    <MovieContext.Provider
      value={{ watchlist, setWatchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextWrapper;
