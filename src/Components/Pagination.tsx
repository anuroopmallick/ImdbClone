import React from "react";

const Pagination = ({ pageNo, setpageNo }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row margin-auto gap-4  ">
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {"<"}
        </button>
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo}
        </button>
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 1}
        </button>
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 2}
        </button>
        ...
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 5}
        </button>
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 6}
        </button>{" "}
        ...
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 9}
        </button>
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 10}
        </button>
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {pageNo + 11}
        </button>
        <button className="w-10 h-10 border border-1px border-gray-200 rounded-xl bg-gray-100">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
