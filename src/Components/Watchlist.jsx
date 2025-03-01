import React from "react";

const Watchlist = () => {
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md my-10">
      <table className="w-full text-left text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4">Name</th>
            <th>Popularity</th>

            <th>Ratings</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map(
            (
              { title, backdrop_path, popularity, vote_average, genre_ids },
              idx
            ) => (
              <tr className="hover:bg-gray-100">
                <td className="flex flex-col justify-center items-start p-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt={name}
                    width={"200px"}
                    height={"150px"}
                  />
                  <div className="font-medium text-gray-700 text-sm py-2">
                    {" "}
                    {title}
                  </div>
                </td>

                <td>{popularity}</td>
                <td>{vote_average}</td>
                <td>Action</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
