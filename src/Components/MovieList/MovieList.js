import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Cards/MovieCard";


const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=12f3fb0320c55954dc0a50d7dd4cc741&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  };
  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie)=>(
            <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
