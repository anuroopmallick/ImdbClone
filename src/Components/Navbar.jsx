import React from "react";
import { Link } from "react-router-dom";
import imdbLogo from "/imdbLogo.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-start">
      <Link to={"/"}>
        <img
          src={imdbLogo}
          style={{ width: "70px", height: "30px" }}
          className="mr-5"
        ></img>
      </Link>
      <Link to={"/"} className="mx-5 font-bold">
        Home
      </Link>
      <Link to={"/wishlist"} className="mx-5 font-bold">
        Wishlist
      </Link>
    </div>
  );
};

export default Navbar;
