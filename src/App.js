import React, {Fragment} from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/itemCount';
import imgLogo from './images/mochi-1.jpg';

function App() {

  // harcodeo algunos greetings
  const greetings = [
    {    
      language: 'english',
      content: 'hello world!'
    },
    {
      language: 'spanish',
      content: 'hola mundo!'
    },
    {
      language: 'french',
      content: 'salut monde!'
    }
  ]
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer greetings={greetings} />
      <ItemCount stock="10" nombreProducto="PunteHB - 1" productImg={ imgLogo } imgAlt="PunteHB - 1"/>
    </Fragment>
  );
}

export default App;
