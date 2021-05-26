import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';
import './index.css';


const divApp = document.querySelector('#app');

ReactDOM.render(<CounterApp value={10} />, divApp);
//ReactDOM.render(<PrimeraApp saludo="hola" />, divApp);