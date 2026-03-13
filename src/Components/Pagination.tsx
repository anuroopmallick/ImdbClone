import React from "react";

const Pagination = ({
  pageNo,
  setpageNo,
}: {
  pageNo: number;
  setpageNo: (fn: any) => void;
}) => {
  function handlePrevious() {
    if (pageNo > 1) setpageNo((prev: number) => prev - 1);
  }

  function handleNext() {
    setpageNo((prev: number) => prev + 1);
  }

  function handlePageClick(page: number) {
    setpageNo(page);
  }

  const pages = [pageNo - 1, pageNo, pageNo + 1].filter((p) => p > 0);

  const btnBase =
    "cursor-pointer w-10 h-10 rounded-lg font-medium transition-all duration-200 flex items-center justify-center";
  const btnDefault =
    "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white";
  const btnActive =
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none shadow-lg";
  const btnNav =
    "bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed";

  return (
    <div className="flex justify-center items-center gap-2 py-8">
      {/* Previous */}
      <button
        className={`${btnBase} ${btnNav}`}
        onClick={handlePrevious}
        disabled={pageNo === 1}
      >
        ‹
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          className={`${btnBase} ${page === pageNo ? btnActive : btnDefault}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button className={`${btnBase} ${btnNav}`} onClick={handleNext}>
        ›
      </button>
    </div>
  );
};

export default Pagination;
