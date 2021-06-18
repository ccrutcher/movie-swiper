import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movies = (props) => {
    return(
        <div className="movie-card">
            <img className="poster" src={`${IMG_API}${props.movie.poster_path}`} alt="Movie poster" />
            <div className="details">
                <p>{props.movie.original_title} ({props.movie.release_date})</p>
                <main>{props.movie.overview}</main>
            </div>
        </div>
    );
}

export default Movies;