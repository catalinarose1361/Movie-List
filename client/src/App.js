import {useState, useEffect} from 'react'

import './App.css';

function App() {
  //using state which at first is empty but soon will store data collected from our MongoDB 
  const [movies, setMovies] = useState([
    {
      title: " ",
      genre: " ",
      year: " "
    }
  ])
  //fetch the data from the route and return a json
  useEffect(() => {
    fetch('/movies').then(res => {
      if(res.ok) {
        return res.json()
      }
      //take json response and set state equal to the json response
    }).then(jsonRes => setMovies(jsonRes))
  })

  return (
    <div className="App">

      {movies.map(movie => {
        return (
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.genre}</p>
            <p>{movie.year}</p>
            <button>DELETE</button>
          </div>
        
        )
      })}

    </div>
  );
}

export default App;
