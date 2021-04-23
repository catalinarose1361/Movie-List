import {useState, useEffect} from 'react'
import logo from './logo.svg';
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
   
    </div>
  );
}

export default App;
