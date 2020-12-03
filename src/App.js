import React ,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap';
import List from './components/List';



function App() {

  return (
    <Fragment>
      <h1 className="Titulo">Movies and Series App</h1>
        <div className= "App">
          <Container>
            <h2>Busca tu serie o pelicula</h2>
            <List/>   
          </Container>
        </div>
    </Fragment>
  );
}

export default App;
