import React, { Component } from "react";
import { Grommet, Box, CardHeader, CardBody, CardFooter,TextInput, Button, TextArea } from "grommet"
// input names are required to parse from body req in our server
    //value is set to whatever value was saved in state for movie
function AddMovieForm(props) {

   console.log(props)
        return (
        <Grommet>
       
<form>

<TextInput
   placeholder="title"
   value={props.movie.title}
   onChange={props.handleChange}
   name="title"
   />

    <TextInput 
   placeholder="genre"
   value={props.movie.genre}
   onChange={props.handleChange}
   name="genre"
   />

   <TextInput
   placeholder="year"
   value={props.movie.year}
   onChange={props.handleChange}
   name="year"
   />

   <Button onClick={props.addMovie} primary label="Add Movie" />

 </form>


     
             
        </Grommet>
        )
    
  }

export default AddMovieForm