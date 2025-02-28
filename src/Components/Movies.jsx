import React, { useState, useEffect } from "react";

const Movies = ({ pageNo }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getNowPlaying(params) {
      let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNo}`;
      const options = {
        method: "GET",
        headers: { accept: "application/json", Authorization: `Bearer ` },
      };

      let resp = await fetch(url, options);

      let data = await resp.json();

      console.log(data);
    }

    getNowPlaying();

    // return () => {
    //   second
    // }
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-left font-bold"> Trending Movies </h1>
      <div className="my-10 flex flex-wrap justify-between gap-20">
        {movies.map((movie, idx) => {
          return (
            <div
              style={{
                backgroundImage: `url(${movie.url})`,
                width: "300px",
                height: "400px",
              }}
              className="h-100 w-50"
              key={idx}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
