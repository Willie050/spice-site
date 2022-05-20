import { useState } from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage"
import Purchase from "./components/Purchase"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import spiceData from '../src/spice-merch.json'

function App() {
  // load the in memory item state date
  const [itemState, setItemState] = useState(spiceData)
  return (
    <BrowserRouter>
       <NavigationBar itemState={itemState}/>
       <Routes>
          <Route path="/checkout" element={<Checkout itemState={itemState}/>} />
          <Route path="/cart" element={<Cart itemState={itemState}/>} />
          <Route path="/purchase" element={<Purchase itemState={itemState} setItemState={setItemState}/>} />
       <Route index element={<HomePage />} /> 
         </Routes> 
     </BrowserRouter>
  );
}

export default App;
