import React from 'react';
import Movies from './Movies'


const UserOne = (props) => {
    return(
        <div>
            <Movies key={props.movie.id} movie={props.movie}/>
            <button onClick={() => props.addToFirstUserPicks(props.movie)}>Like</button>
            <button onClick={() => props.skipMovie(props.movie)}>Skip</button>

        </div>
    );
}

export default UserOne;

/*
skipMovie={skipFirstUser}
*/