import { useState } from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage"
// import Purchase from "./components/Purchase"
// import Cart from "./components/Cart"
// import Checkout from "./components/Checkout"
import spiceData from '../src/spice-merch.json'

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
          {/* <Route path="/checkout" element={<Checkout itemState={itemState}/>} />
          <Route path="/cart" element={<Cart itemState={itemState}/>} />
          <Route path="/purchase" element={<Purchase itemState={itemState} setItemState={setItemState}/>} /> */}
          <Route path="/" element={<HomePage />} />
          
        </Routes>
    </Router>
    
  );
}

export default App;
