import './App.css';
import React, { useEffect, useState } from 'react';
import UserOne from './Components/UserOne'
import UserTwo from './Components/UserTwo'

//API KEY
const URL = `https://api.themoviedb.org/3/discover/movie/?api_key=`

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [firstUserPicks, setFirstUserPicks] = useState([])
  const [secondUserOptions, setSecondUserOptions] = useState([])
  const [secondUserOptionsExist, setSecondUserOptionsExist] = useState(false)
  const [bothLiked, setBothLike] = useState([])
  const [currentUser, setUser] = useState(1)
  const [userPage, setUserPage] = useState()


  //Fetch api and set movies state to return data
  useEffect(() => {
    async function getMovies() {
      const moviesResp = await fetch(URL + `${API_KEY}`)
      const moviesResp2 = await moviesResp.json()
  
      await setMovies(moviesResp2.results)
      await setLoading(false)      
    }
  getMovies()
  }, [])

  //re-render UserOne whenever the movies list changes
  useEffect(()=> {
    setUserPage(<UserOne movie={movies[0]} addToFirstUserPicks={addToFirstUserPicks} skipMovie={skipFirstUser} />)
  }, [movies])

  //re-render UseTwo whenever the UserOnePicks list changes
  useEffect(()=> {
    setUserPage(<UserTwo movie={secondUserOptions[0]} addToBothLike={userTwoLike} skipMovie={skipSecondUser} secondUserOptionsExist={secondUserOptionsExist} />)
  }, [secondUserOptions])


  //Takes the current viewed movie and adds it to UserOne's liked movies
  function addToFirstUserPicks(movieToAdd){
    setFirstUserPicks([...firstUserPicks, movieToAdd])
    setMovies(movies.filter((movie, index) => index !== 0))
  }

  function skipFirstUser(){
    setMovies(movies.filter((movie, index) => index !== 0))
  }



  function userTwoLike(movieToLike){
    setBothLike([...bothLiked, movieToLike]);
    validateSecondOptions()
  }

  function skipSecondUser(){
    validateSecondOptions()
  }


  function validateSecondOptions(){
    setFirstUserPicks(firstUserPicks.filter((movie, index) => index !== 0))
    if(firstUserPicks.length > 0){
      setSecondUserOptionsExist(true)
    }else{
      setSecondUserOptionsExist(false)
    }
    setSecondUserOptions([...firstUserPicks])
  }

  //Switches views between first and second user
  function toggleUser(){
    if(currentUser === 1){
      setToSecondUser()
    }
    else {
      setToFirstUser()
    }
  }

  function setToFirstUser(){
    setUser(1)
    setUserPage(<UserOne movie={movies[0]} addToFirstUserPicks={addToFirstUserPicks} skipMovie={skipFirstUser} />)
  }

  function setToSecondUser(){
    setUser(2)
    validateSecondOptions()
  }

return (
    <div className="App">
      {isLoading ? 
        (<div>Loading...</div>) :
        (<div>
          <button onClick={toggleUser}>Current user is {currentUser}</button>
          {userPage}

          <ul>
          {bothLiked.map((movie) => {
            return <li key={movie.id}>{movie.original_title}</li>
          })}
          </ul>
        </div>)
      }
    </div>
  );
}

export default App;