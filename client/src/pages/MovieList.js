import { React, useState, useEffect } from "react";
import ViewAll from "../components/ViewAll";
import AddMovieForm from "../components/AddMovieForm"
import axios from "axios"
import { Grommet, Button, Grid, Box, Header, Form, FormField, List, TextInput } from "grommet";

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



    return (
        <Grommet>
              <Grid
  rows={['medium', 'large']}
  columns={['medium', 'large']}
  gap="small"
  areas={[
    { name: 'header', start: [0, 0], end: [1, 0] },
    { name: 'addMovie', start: [0, 1], end: [0, 1] },
    { name: 'list', start: [1, 1], end: [1, 1] },
  ]}
>


      <Header gridArea="header">Add Movie</Header>
      {movies.map(movie => {
			return (
        <ViewAll 
        gridArea="list"
        title={movie.title}
        genre={movie.genre}
        year={movie.year}
        id={movie._id}
        deleteMovie={deleteMovie}
        
        />

   
      )
      })}
        <AddMovieForm 
      gridArea="addMovie" 
      movie={movie} 
      handleChange={handleChange}
      addMovie={addMovie}
      
      />
   
      
      
        
   
  

    

    

</Grid>
        </Grommet>
      
     
    ) 
}

export default MovieList