import React, { useState } from "react";
import Baner from "./Baner";
import Movies from "./Movies";
import Pagination from "./Pagination";

const Home = () => {
  const [pageNo, setPageNo] = useState(1);
  return (
    <div>
      <Baner />
      <Movies pageNo={pageNo} />
      <Pagination pageNo={pageNo} setpageNo={setPageNo} />
    </div>
  );
};

export default Home;
