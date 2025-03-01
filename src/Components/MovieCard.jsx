import React from "react";
import { Heart } from "lucide-react";

const MovieCard = ({ movie, addToWatchlist, removeFromWatchlist }) => {
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  function isInWatchlist() {
    return watchlist.find((mov) => mov.id == movie.id);
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
      }}
      className="h-100 w-60 rounded-xl flex flex-col justify-end text-white text-2xl bg-cover bg-center relative"
    >
      {isInWatchlist() ? (
        <div
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => removeFromWatchlist(movie)}
        >
          ❤️
        </div>
      ) : (
        <div
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => addToWatchlist(movie)}
        >
          <Heart />
        </div>
      )}

      <div className="w-full h-1/4 rounded-b-xl bg-white/30 backdrop-blur-sm text-center flex items-center justify-center">
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;
