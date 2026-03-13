import React, { useState, useEffect, useContext } from "react";
import {
  ArrowUp,
  ArrowDown,
  Trash2,
  Star,
  TrendingUp,
  Search,
} from "lucide-react";
import genreids from "../utility";
import { MovieContext } from "../Context/MovieContext";

const Watchlist = () => {
  const { watchlist, setWatchlist, removeFromWatchlist } =
    useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrgenre] = useState("All Genres");

  useEffect(() => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(watchlist);
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleGenreFilter(genre) {
    setCurrgenre(genre);
  }

  useEffect(() => {
    if (watchlist) {
      let genres = watchlist.map((movie) => genreids[movie.genre_ids[0]]);
      genres = new Set(genres);
      setGenreList(["All Genres", ...genres]);
    }
  }, [watchlist]);

  return (
    <div className="px-8 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-7 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
        <h1 className="text-2xl font-bold text-white">My Watchlist</h1>
      </div>

      {/* Genre Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {genreList.map((genre, idx) => (
          <div
            key={idx}
            onClick={() => handleGenreFilter(genre)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
              currGenre == genre
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                : "bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-purple-500 transition-colors"
          placeholder="Search by movie name"
          onChange={handleSearch}
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-gray-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-gray-400 text-sm uppercase tracking-wide">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Popularity</span>
                  <div className="flex flex-col ml-1">
                    <span
                      onClick={() => handleAscending(watchlist)}
                      className="cursor-pointer text-xs leading-none hover:text-purple-400"
                    >
                      ▲
                    </span>
                    <span
                      onClick={() => handleDescending(watchlist)}
                      className="cursor-pointer text-xs leading-none hover:text-purple-400"
                    >
                      ▼
                    </span>
                  </div>
                </div>
              </th>
              <th className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" /> Ratings
                </div>
              </th>
              <th className="px-6 py-4">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {watchlist &&
              watchlist
                .filter((movie) => {
                  if (currGenre == "All Genres") {
                    return true;
                  } else {
                    return genreids[movie.genre_ids[0]] == currGenre;
                  }
                })
                .filter((movie) =>
                  movie.title.toLowerCase().includes(search.toLowerCase()),
                )
                .map((movie, idx) => (
                  <tr
                    key={idx}
                    className="bg-gray-900 hover:bg-gray-800 transition-colors duration-150"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          alt={movie.name}
                          className="w-24 h-14 object-cover rounded-lg"
                        />
                        <span className="text-white font-medium text-sm">
                          {movie.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      {movie.popularity.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-yellow-400 font-semibold text-sm">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" />
                        {movie.vote_average.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => removeFromWatchlist(movie)}
                        className="text-gray-500 hover:text-red-400 transition-colors duration-200"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
