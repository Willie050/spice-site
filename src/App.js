import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage"

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
          {/* <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/music">
            <MusicPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/book">
            <BookPage />
          </Route> */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
