import React from 'react';
import Movies from './Movies'


const UserTwo = (props) => {
    console.log(props.secondUserOptionsExist)
    console.log(props.movie)
    return(
        <div className="user">
            {
                props.secondUserOptionsExist ? (
                    <div>
                        <Movies key={props.movie.id} movie={props.movie}/>
                        <div className="btns">
                            <button className="swipe-btn" onClick={() => props.skipMovie(props.movie)}>Skip</button>
                            <button className="swipe-btn" onClick={() => props.addToBothLike(props.movie)}>Like</button>
                        </div>
                    </div>
                ) : (<div className="no-movies">User One must select more movies!</div>)
            }

        </div>
    );
}

export default UserTwo;