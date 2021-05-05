import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Results = (props) => {
    return(
        <div className="results-card">
            <img className="results-poster" src={`${IMG_API}${props.movie.poster_path}`} />
            <div className="results-details">
                <p>{props.movie.original_title}</p>

            </div>
        </div>
    );
}

export default Results;

//{props.movie.overview}