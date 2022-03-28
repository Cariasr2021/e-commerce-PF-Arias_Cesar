import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from "./components/NavBar";
import Laptop from "./components/Laptop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoriaId/:Id' element={<ItemDetailContainer />}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
