import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sdata from './Sdata'
import * as serviceWorker from './serviceWorker';
import Card from './Card';


function ncard(val){
  return(
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}
ReactDOM.render(
  <React.StrictMode>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {Sdata.map(ncard)}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 
