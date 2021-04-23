import './App.css';
import React, { useEffect, useState } from 'react';
import Movies from "./Components/Movies";

//API KEY


const DISCOVER_API = `https://api.themoviedb.org/3/discover/movie/?api_key=${API_KEY}`
const IMG_API = "https://image.tmdb.orig/t/p/w1280";

function App() {
  const [movies, setMovies] = useState([]);


  //Fetch api and set movies state to return data
  useEffect(async () => {
      const moviesResp = await fetch(DISCOVER_API);
      const movies = await moviesResp.json();

      setMovies(movies);
      console.log(movies);
  }, [])

  
  return (
    <div className="App">

    </div>
  );
}

export default App;
