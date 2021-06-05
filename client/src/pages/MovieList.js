import { React, useState, useEffect } from "react";
// import ViewAll from "../components/ViewAll";
// import AddMovieForm from "../components/AddMovieForm"
import axios from "axios"
import { Grommet, Button } from "grommet";

const MovieList = () => {

    //HERE WE ARE USING STATE WHICH AT FIRST IS EMPTY BUT 
    // WILL BE USED TO STORE DATA COLLECTED FROM MONGODB ATLAS 
    // NOTE THE ARRAY OF OBJECTS
  const [movies, setMovies] = useState([
    {
      title: " ",
      genre: " ",
      year: " "
    }
  ]);

  //SAVES DATA INTENDED TO BE STORED IN THE DB 
  //NOTE THE SINGLE OBJECT
  const [movie, setMovie] = useState(
    {
      title: " ",
      genre: " ",
      year: " ",
    }
  );

  //FETCH THE MONGODB DATA FROM THE ROUTE AND SET THE 
  //RESPONSE IN JSON FORMAT
  useEffect(() => {

    fetch('/movies').then(res => {

        if(res.ok) {

            return res.json()

        }

    //SET STATE 'movies' EQUAL TO JSON RESPONSE
    }).then(jsonRes => setMovies(jsonRes))

  });

    //handleChange TRACKS WHAT IS BEING TYPED
    // 'e' HAS TWO PEICES OF DATA, name AND value OF TEXT INPUT
    function handleChange(e) {

        const {name, value} = e.target;

        setMovie(prevInput => {

            return (

                {

                ...prevInput,
                [name]: value

                }

            );

        });

    };

    function addMovie(e) {

        e.preventDefault();

        alert("movie added");

        //GETS VALUES FROM STATE VARIABLE 'movie'
        const newMovie = {

            title: movie.title,
            genre: movie.genre,
            year: movie.year

        };

        //SEND POST REQUEST TO BACKEND CONTAINING THE DATA IN newMovie
        axios.post('/newMovie', newMovie);

    };

    //THIS FUNCTION SENDS A DELETE REQUEST TO THE BACKEND CONTAINING 
    //THE SPECIFIC ID OF THE DELETE BUTTON BEING CLICKED
    function deleteMovie(id) {

        axios.delete('/delete/' + id);

        alert("movie deleted");

    };

    // input names are required to parse from body req in our server
    //value is set to whatever value was saved in state for movie

    return (
     
        <div className="App">
      <h1>Add Movie</h1>
      <form>
        
        <input onChange={handleChange} name="title" value={movie.title}></input>
        <input onChange={handleChange} name="genre" value={movie.genre}></input>
        <input onChange={handleChange} name="year" value={movie.year}></input>
       <button onClick={addMovie}>ADD MOVIE</button>
      </form>
      {movies.map(movie => {
        return (
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.genre}</p>
            <p>{movie.year}</p>
            <button onClick={() => deleteMovie(movie._id)}>DELETE</button>
          </div>
        
        )
      })}

    </div>

    )
}

export default MovieList