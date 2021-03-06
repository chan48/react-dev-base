import ReactDOM from 'react-dom';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import style from '../resources/style.css';

const Root = () => (
  <div className="container">
    Hello World!!!
    <p className={style.color}>style</p>
    <i className="fa fa-close" /> {process.env.NODE_ENV}
  </div>
);

ReactDOM.render(
  <Root />,
  document.getElementById('app'),
);
