import React, {Fragment} from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

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
    </Fragment>
  );
}

export default App;
