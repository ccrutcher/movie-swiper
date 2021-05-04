import React from 'react';
import Movies from './Movies'


const UserTwo = (props) => {
    return(
        <div>
            {
                props.secondUserOptionsExist ? (
                    <div>
                        <Movies key={props.movie.id} movie={props.movie}/>
                        <button onClick={() => props.addToBothLike(props.movie)}>Like</button>
                        <button onClick={() => props.skipMovie(props.movie)}>Skip</button>
                    </div>
                ) : (<div>User One must select more movies!</div>)
            }

        </div>
    );
}

export default UserTwo;