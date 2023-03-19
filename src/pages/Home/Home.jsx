import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "../../components/Card/Card";

const Home = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${
                    import.meta.env.VITE_API_KEY
                }&language=en-US&page=1`
            )
            .then((res) => setPopular(res.data.results));
    }, []);

    return (
        <div className="Home">
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popular.map((movie, id) => (
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={`/movie/${movie.id}`}
                            key={id}
                        >
                            <div className="posterImage">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${
                                        movie && movie.backdrop_path
                                    }`}
                                />
                            </div>
                            <div className="posterOverlay">
                                <div className="posterTitle">
                                    {movie ? movie.original_title : ""}
                                </div>
                                <div className="posterRuntime">
                                    {movie ? movie.release_date : ""}
                                    <span className="rating">
                                        {movie ? movie.vote_average : ""}{" "}
                                        <i className="fas fa-star"></i>{" "}
                                    </span>
                                </div>
                                <div className="posterDescription">
                                    {movie ? movie.overview : ""}
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Card movie={popular[0]} />
                <Card movie={popular[1]} />
                <Card movie={popular[2]} />
                <Card movie={popular[3]} />
            </div>
        </div>
    );
};

export default Home;
