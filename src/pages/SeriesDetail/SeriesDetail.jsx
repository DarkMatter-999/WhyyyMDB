import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./SeriesDetail.css";

const SeriesDetail = () => {
    const [currentMovieDetail, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        axios
            .get(
                `https://api.themoviedb.org/3/tv/${id}?api_key=${
                    import.meta.env.VITE_API_KEY
                }&language=en-US&page=1`
            )
            .then((res) => setMovie(res.data));
    };
    return (
        <div className="movie">
            <div className="movieIntro">
                <img
                    className="movieBackdrop"
                    src={`https://image.tmdb.org/t/p/original${
                        currentMovieDetail
                            ? currentMovieDetail.backdrop_path
                            : ""
                    }`}
                />
            </div>
            <div className="movieDetail">
                <div className="movieDetailLeft">
                    <div className="posterBox">
                        <img
                            className="poster"
                            src={`https://image.tmdb.org/t/p/original${
                                currentMovieDetail
                                    ? currentMovieDetail.poster_path
                                    : ""
                            }`}
                        />
                    </div>
                </div>
                <div className="movieDetailRight">
                    <div className="movieDetailRightTop">
                        <div className="movieName">
                            {currentMovieDetail
                                ? currentMovieDetail.original_title
                                : ""}
                        </div>
                        <div className="movieTagline">
                            {currentMovieDetail
                                ? currentMovieDetail.tagline
                                : ""}
                        </div>
                        <div className="movieRating">
                            {currentMovieDetail
                                ? currentMovieDetail.vote_average
                                : ""}{" "}
                            <i className="fas fa-star" />
                            <span className="voteCount">
                                {currentMovieDetail
                                    ? "(" +
                                      currentMovieDetail.vote_count +
                                      ") votes"
                                    : ""}
                            </span>
                        </div>
                        <div className="movieRuntime">
                            {currentMovieDetail
                                ? currentMovieDetail.runtime + " mins"
                                : ""}
                        </div>
                        <div className="ReleaseDate">
                            {currentMovieDetail
                                ? "Release date: " +
                                  currentMovieDetail.release_date
                                : ""}
                        </div>
                        <div className="Genres">
                            {currentMovieDetail && currentMovieDetail.genres
                                ? currentMovieDetail.genres.map((genre, id) => (
                                      <span
                                          className="moviegenre"
                                          id={genre.id}
                                          key={id}
                                      >
                                          {genre.name}
                                      </span>
                                  ))
                                : ""}
                        </div>
                    </div>
                    <div className="movieDetailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>
                            {currentMovieDetail
                                ? currentMovieDetail.overview
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
            <div className="movieLinks">
                <div className="movieHeading">Useful Links</div>
                {currentMovieDetail && currentMovieDetail.homepage && (
                    <a
                        href={currentMovieDetail.homepage}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <p>
                            <span className="movieHomeButton movieButton">
                                Homepage{" "}
                                <i className="newTab fas fa-external-link-alt"></i>
                            </span>
                        </p>
                    </a>
                )}
                {currentMovieDetail && currentMovieDetail.imdb_id && (
                    <a
                        href={
                            "https://www.imdb.com/title/" +
                            currentMovieDetail.imdb_id
                        }
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <p>
                            <span className="movieImdbButton movieButton">
                                IMDb
                                <i className="newTab fas fa-external-link-alt"></i>
                            </span>
                        </p>
                    </a>
                )}
            </div>
            <div className="movieHeading">Production companies</div>
            <div className="movieProduction">
                {currentMovieDetail &&
                    currentMovieDetail.production_companies &&
                    currentMovieDetail.production_companies.map(
                        (company, id) => (
                            <div key={id}>
                                {company.logo_path && (
                                    <span className="productionCompanyImage">
                                        <img
                                            className="productionComapany"
                                            src={
                                                "https://image.tmdb.org/t/p/original" +
                                                company.logo_path
                                            }
                                        />
                                        <span>{company.name}</span>
                                    </span>
                                )}
                            </div>
                        )
                    )}
            </div>
        </div>
    );
};

export default SeriesDetail;
