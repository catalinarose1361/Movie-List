import  React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MovieList from "./pages/MovieList";
import NavBar from "./components/NavBar";
import NoMatch from "./pages/NoMatch";

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

