import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          <div className="cards">
            <img
              className="cards_img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
            <div className="cards_overlay">
                <div className="card_title">
                    {movie?movie.original_title:""}
                </div>
                <div className="card_runtime">
                    {movie?movie.release_date:""}
                    <span className="card_rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card_description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
            </Link>
      )}
    </>
  );
};

export default MovieCard;