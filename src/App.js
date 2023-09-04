import React from "react";

import "./App.css";

import MovieCard from "./MovieCard";

import SearchIcon from "./search.svg";
import { useState, useEffect } from "react";

// c032e2d7

const API_URL = "http://www.omdbapi.com?apikey=8a8035a1";

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies()} />
      </div>
      {
         movies?.length > 0 ? (
            <div className="container">
                {
                    movies?.map((movie)=>(<MovieCard movie ={movie}/>))
                }
           
        </div>
         ) : (
            <div className="empty">
                <h3>
                    No Movies Found! Please try again with a different title...
                </h3>
            </div>
         )
      }

    </div>
  );
};

export default App;
