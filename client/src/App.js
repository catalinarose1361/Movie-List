import {useState, useEffect} from 'react'
import axios from "axios"
import './App.css';

function App() {
  //using state which at first is empty but soon will store data collected from our MongoDB 
  // note the array of objects
  const [movies, setMovies] = useState([
    {
      title: " ",
      genre: " ",
      year: " "
    }
  ])
  //saves data to be stored in our database
  // note only one object
  const [movie, setMovie] = useState(
    {
      title: " ",
      genre: " ",
      year: " ",
    }
  )
  //fetch the data from the route and return a json
  useEffect(() => {
    fetch('/movies').then(res => {
      if(res.ok) {
        return res.json()
      }
      //take json response and set state equal to the json response
    }).then(jsonRes => setMovies(jsonRes))
  })
  //handleChange tracks what is being typed 
  // 'e' has two peices of data, the name and value of inputs
  function handleChange(e) {
    const {name, value} = e.target;
    setMovie(prevInput => {
      return(
        {
          ...prevInput,
          [name]: value
        }
      )

    })
  }

  function addMovie(e) {
    e.preventDefault();
    console.log("movie added")
    //gets values from state
    const newMovie = {
      title: movie.title,
      genre: movie.genre,
      year: movie.year
    }
    //posts our newMovie variable to proxy
    axios.post('/newMovie', newMovie)
  }
// input names are required to parse from body req in our server
//value is set to whatever value was saved in state for movie
  return (
    <div className="App">
      <h1>Add Movie</h1>
      <form>
        
        <input onChange={handleChange} name="title" value={movie.title}></input>
        <input onChange={handleChange} name="genre" value={movie.genre}></input>
        <input onChange={handleChange} name="year" value={movie.year}></input>
        <button onCLick={addMovie}>ADD MOVIE</button>
      </form>
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
