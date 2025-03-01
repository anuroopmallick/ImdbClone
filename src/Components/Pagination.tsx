import React from "react";

const Pagination = ({ pageNo, setpageNo }) => {
  function handlePrevious() {
    if (pageNo > 1) setpageNo((prev: any) => prev - 1);
  }

  function handleNext(e: any) {
    setpageNo((prev: any) => prev + 1);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-row margin-auto gap-4  ">
        <button
          className="cursor-pointer w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100"
          onClick={handlePrevious}
        >
          {"<"}
        </button>
        <button className="cursor-pointer w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo}
        </button>
        <button className="cursor-pointer w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 1}
        </button>
        <button className="cursor-pointer w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 2}
        </button>
        <button
          className="cursor-pointer w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
