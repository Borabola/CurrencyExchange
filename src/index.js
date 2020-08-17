import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let nav = [
  {title: 'Главная',
  link: '/'},
  {title: 'Пункты обмена',
  link: '/points'},
  {title: 'О нас',
  link: '/about'},
]

ReactDOM.render(
  
    <App nav={nav} />,
  document.getElementById('root')
);

serviceWorker.unregister();
