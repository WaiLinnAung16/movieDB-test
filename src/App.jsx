import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Movie from "./components/Movie";

const App = () => {
  const [filter, setFilter] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState(0);
  const fetchMovie = async () => {
    const api = await fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`);
    const { results } = await api.json();
    console.log(results);
    setMovies(results);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <Filter
        genre={genre}
        setGenre={setGenre}
        setFilter={setFilter}
        movies={movies}
        setMovies={setMovies}
        filter={filter}
      />
      <div className="container mx-auto flex flex-wrap gap-3">
        {filter?.map((movie) => {
          return (
            <div key={movie.id} className="">
              <Movie movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
