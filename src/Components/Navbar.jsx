import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 px-8 py-4 flex flex-row items-center gap-8 sticky top-0 z-50">
      <Link to={"/"}>
        <h2 className="font-bold text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          PinnMovies
        </h2>
      </Link>

      <div className="flex flex-row items-center gap-6">
        <Link
          to={"/"}
          className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to={"/watchlist"}
          className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
        >
          Watchlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
