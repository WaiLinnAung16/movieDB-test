import React, { useEffect } from "react";

const Filter = ({ genre, setGenre, setFilter, movies }) => {
  useEffect(() => {
    if (genre === 0) {
      return setFilter(movies);
    }
    const filter = movies.filter((m) => m.genre_ids.includes(genre));
    setFilter(filter);
  }, [genre]);
  return (
    <div className=" flex gap-3 justify-center my-5">
      <button
        onClick={() => setGenre(0)}
        className="px-8 py-2 bg-gray-800 text-white"
      >
        All
      </button>
      <button
        onClick={() => setGenre(28)}
        className="px-8 py-2 bg-gray-800 text-white"
      >
        Action
      </button>
      <button
        onClick={() => setGenre(35)}
        className="px-8 py-2 bg-gray-800 text-white"
      >
        Comedy
      </button>
    </div>
  );
};

export default Filter;
