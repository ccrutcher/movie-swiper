import React from 'react';
import '../Movie.css'

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movies = (props) => {
    return(
        <div className="movie-card">
            <img src={`${IMG_API}${props.movie.poster_path}`} />
            {props.movie.original_title}
        </div>
    );
}

export default Movies;