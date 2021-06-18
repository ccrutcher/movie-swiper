import React from 'react';
import Movies from './Movies'


const UserOne = (props) => {
    return(
        <div className="user">
            <Movies key={props.movie.id} movie={props.movie}/>
            <div className="btns">
                <button className="swipe-btn" onClick={() => props.skipMovie(props.movie)}>Skip</button>
                <button className="swipe-btn" onClick={() => props.addToFirstUserPicks(props.movie)}>Like</button>
            </div>
        </div>
    );
}

export default UserOne;