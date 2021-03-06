import React, {Fragment} from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/itemCount';
import imgLogo from './images/mochi-1.jpg';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <Fragment>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer/>
      <ItemCount stock="10" nombreProducto="PunteHB - 1" productImg={ imgLogo } imgAlt="PunteHB - 1"/>
    </Fragment>
  );
}

export default App;
