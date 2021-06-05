import  React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MovieList from "./pages/MovieList";
import NavBar from "./components/NavBar"
import NoMatch from "./pages/NoMatch"
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movieList" component={MovieList} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

// import {useState, useEffect} from 'react'
// import axios from "axios"
// import './App.css';

// function App() {
//   //using state which at first is empty but soon will store data collected from our MongoDB 
//   // note the array of objects
//   const [movies, setMovies] = useState([
//     {
//       title: " ",
//       genre: " ",
//       year: " "
//     }
//   ])
//   //saves data to be stored in our database
//   // note only one object
//   const [movie, setMovie] = useState(
//     {
//       title: " ",
//       genre: " ",
//       year: " ",
//     }
//   )
//   //fetch the data from the route and return a json
//   useEffect(() => {
//     fetch('/movies').then(res => {
//       if(res.ok) {
//         return res.json()
//       }
//       //take json response and set state equal to the json response
//     }).then(jsonRes => setMovies(jsonRes))
//   })
//   //handleChange tracks what is being typed 
//   // 'e' has two peices of data, the name and value of inputs
//   function handleChange(e) {
//     const {name, value} = e.target;
//     setMovie(prevInput => {
//       return(
//         {
//           ...prevInput,
//           [name]: value
//         }
//       )

//     })
//   }

//   function addMovie(e) {
//     e.preventDefault();
//     alert("movie added")
//     //gets values from state
//     const newMovie = {
//       title: movie.title,
//       genre: movie.genre,
//       year: movie.year
//     }
//     //posts our newMovie variable to proxy
//     axios.post('/newMovie', newMovie)
//   }
//   //this function gets called in the onClick for delete
//   function deleteMovie(id){
//     axios.delete('/delete/' + id)
//     alert("movie deleted")
//   }

// // input names are required to parse from body req in our server
// //value is set to whatever value was saved in state for movie
//   return (
//     <div className="App">
//       <h1>Add Movie</h1>
//       <form>
        
//         <input onChange={handleChange} name="title" value={movie.title}></input>
//         <input onChange={handleChange} name="genre" value={movie.genre}></input>
//         <input onChange={handleChange} name="year" value={movie.year}></input>
//         <button onClick={addMovie}>ADD MOVIE</button>
//       </form>
//       {movies.map(movie => {
//         return (
//           <div>
//             <h1>{movie.title}</h1>
//             <p>{movie.genre}</p>
//             <p>{movie.year}</p>
//             <button onClick={() => deleteMovie(movie._id)}>DELETE</button>
//           </div>
        
//         )
//       })}

//     </div>
//   );
// }

// export default App;
