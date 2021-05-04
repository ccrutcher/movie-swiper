import React from 'react';
import Movies from './Movies'


const UserTwo = (props) => {
    return(
        <div className="user">
            {
                props.secondUserOptionsExist ? (
                    <div>
                        <Movies key={props.movie.id} movie={props.movie}/>
                        <div className="btns">
                            <button className="swipe-btn" onClick={() => props.addToBothLike(props.movie)}>Like</button>
                            <button className="swipe-btn" onClick={() => props.skipMovie(props.movie)}>Skip</button>
                        </div>
                    </div>
                ) : (<div>User One must select more movies!</div>)
            }

        </div>
    );
}

export default UserTwo;