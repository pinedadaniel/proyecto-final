import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
//import 'font-awesome';
import popper from 'popper.js';
import  $ from 'jquery';

const container = document.getElementById('root');

ReactDOM.render(<App />, (container));