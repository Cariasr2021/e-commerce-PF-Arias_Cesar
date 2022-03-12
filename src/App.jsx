import { Fragment } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const datos = [
  {
      id: 1,
      nombre: 'producto-1',
      imagen: 'imagen-1' 
  },
  {
      id: 2,
      nombre: 'producto-2',
      imagen: 'imagen-2' 
  },
  {
      id: 3,
      nombre: 'producto-3',
      imagen: 'imagen-3' 
  }
]

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer datos={datos}/>
    </Fragment>
  );
}

export default App;
