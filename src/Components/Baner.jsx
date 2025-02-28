import React from "react";
import landscape from "/landscape.jpg";

const banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/landscape.jpg)`,
        width: "100%",
        height: "400px",
      }}
      className="my-10"
    >
      <div className="m-auto ">PlaceHolder movie</div>
    </div>
  );
};

export default banner;
