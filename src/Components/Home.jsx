import React, { useState } from "react";
import Baner from "./Baner";
import Movies from "./Movies";
import Pagination from "./Pagination";

const Home = () => {
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  return (
    <div>
      <Baner />
      <Movies pageNo={pageNo} setTotalPages={setTotalPages} />
      <Pagination
        pageNo={pageNo}
        setpageNo={setPageNo}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Home;
