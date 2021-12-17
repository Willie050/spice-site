import React, {useEffect, useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage"
import Purchase from "./components/Purchase"
import Cart from "./components/Cart"
import spiceData from './spice-merch.json'

function App() {
  const [itemState, setItemState] = useState(spiceData)
//   useEffect(() => {
//     console.log("state updated from App.js")
// }, [itemsInCart])

  // console.log("itemsInCart from Root: " + Object.keys(itemsInCart))
  console.log(itemState)
  return (
    <Router>
      <NavigationBar 
      itemState={itemState}
      />
      <Routes>
          {/* <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/music">
            <MusicPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          */}
          <Route path="/cart" element={<Cart itemState={itemState}/>} />
          <Route path="/purchase" element={<Purchase itemState={itemState} setItemState={setItemState}/>} />
          <Route path="/" element={<HomePage />} />
          
        </Routes>
    </Router>
    
  );
}

export default App;
