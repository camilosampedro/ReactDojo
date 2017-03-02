import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Categorias from './Categorias/Categorias'
import BusquedaPorCategoria from './BusquedaPorCategoria'
import './index.css';

ReactDOM.render(
  <Categorias />,
  document.getElementById('root')
);

  // var categoria = 'MCO1574';
  // ReactDOM.render(
  //   <BusquedaPorCategoria categoria={categoria}/>,
  //   document.getElementById('root')
  // );
