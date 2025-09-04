import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let unidad = 0
let decena = 0
let centena = 0
let miles = 0
let diezMiles = 0
let cienMiles = 0
let millones = 0
let contador = 




setInterval(() => {
  unidad++
  
  if (unidad == 10){
    unidad = 0;
    decena ++
  } else if(decena == 10){
    unidad = 0
    decena = 0
    centena ++
  } else if (centena == 10){
    unidad = 0
    decena = 0
    centena = 0
    miles ++
  } else if(miles == 10){
    unidad = 0
    decena = 0
    centena = 0
    miles = 0
    diezMiles ++
  } else if(diezMiles == 10){
    unidad = 0
    decena = 0
    centena = 0
    miles = 0
    diezMiles = 0
    cienMiles ++
  } else if(cienMiles == 10){
    unidad = 0
    decena = 0
    centena = 0
    miles = 0
    diezMiles = 0
    cienMiles = 0
    millones ++
  } else if(millones == 10){
    unidad = 0
    decena = 0
    centena = 0
    miles = 0
    diezMiles = 0
    cienMiles = 0
    millones = 0    
  }
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
    <Home unidad={unidad} decena={decena} centena={centena}
     miles={miles} diezMiles={diezMiles} cienMiles={cienMiles} millones={millones} />
  </React.StrictMode>,
  
  
)
}, 1000);
