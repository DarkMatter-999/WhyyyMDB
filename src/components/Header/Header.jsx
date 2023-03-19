import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/" className="headerIcon">
                    Home
                </Link>
                <Link to="/movies/popular" className="headerIcon">
                    Popular
                </Link>
                <Link to="/movies/top_rated" className="headerIcon">
                    Top Rated
                </Link>
                <Link to="/movies/upcoming" className="headerIcon">
                    Upcoming
                </Link>
            </div>
        </div>
    );
};

export default Header;
