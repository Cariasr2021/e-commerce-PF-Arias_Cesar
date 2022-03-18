import { Fragment } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer/>
    </Fragment>
  );
}

export default App;
