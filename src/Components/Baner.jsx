import React, { useEffect, useState } from "react";
import landscape from "/landscape.jpg";
import axios from "axios";

const banner = () => {
  const [banner, setBanner] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=904164463f897ff2cdc1dc0d24eba8fd&language=en-US&page=1";
      const resp = (await axios.get(url)).data.results[0];
      console.log(resp);

      setBanner(resp.backdrop_path);
      setTitle(resp.title);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${banner})`,
        width: "100%",
        height: "450px",
      }}
      className="my-10 bg-cover bg-center te text-left text-white"
    >
      <div className="m-auto text-2xl font-medium p-2">{title}</div>
    </div>
  );
};

export default banner;

// api_key=904164463f897ff2cdc1dc0d24eba8fd
