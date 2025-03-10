import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import genreids from "../utility";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState(null);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrgenre] = useState("All Genres");

  useEffect(() => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(watchlist);
  }, []);

  function handleAscending(watchlist) {
    watchlist.sort((a, b) => a.popularity - b.popularity);
    setWatchlist([...watchlist]);
  }

  function handleDescending(watchlist) {
    watchlist.sort((a, b) => b.popularity - a.popularity);
    setWatchlist([...watchlist]);
  }

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
    <>
      <div className="flex flex-wrap justify-evenly w-full mt-5">
        {genreList.map((genre, idx) => (
          <div
            key={idx}
            className={`${
              currGenre == genre ? "bg-blue-400" : "bg-blue-200"
            } py-1 px-2  rounded-xl w-max cursor-pointer`}
            onClick={(e) => {
              handleGenreFilter(genre);
            }}
          >
            {genre}
          </div>
        ))}
      </div>
      <input
        className="px-2 py-1 border border-slate-500 border-2 rounded-lg w-full mt-10"
        placeholder="Search by movie name"
        onChange={handleSearch}
      />
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md my-10">
        <table className="w-full text-left text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">
                <div>Name</div>
                <div>{}</div>
              </th>
              <th>
                <span
                  onClick={() => handleAscending(watchlist)}
                  className="cursor-pointer"
                >
                  ⬇️
                </span>
                Popularity{" "}
                <span
                  onClick={() => handleDescending(watchlist)}
                  className="cursor-pointer"
                >
                  ⬆️
                </span>
              </th>

              <th>Ratings</th>
              <th>Genre</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
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
                  movie.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((movie, idx) => (
                  <tr key={idx} className="hover:bg-gray-100">
                    <td className="flex flex-col justify-center items-start p-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.name}
                        width={"200px"}
                        height={"150px"}
                      />
                      <div className="font-medium text-gray-700 text-sm py-2">
                        {" "}
                        {movie.title}
                      </div>
                    </td>

                    <td>{movie.popularity.toFixed(2)}</td>
                    <td>{movie.vote_average.toFixed(2)}</td>
                    <td>
                      <button onClick={() => {}}>
                        <Trash2 />{" "}
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
