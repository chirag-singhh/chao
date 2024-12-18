import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Card from './Card';

function App() {
  let [value,setValue]=useState("0");
  const increase = ()=>{
    console.log("clicked",value);
    value++;
    setValue(value);
  }
  const decrease = ()=>{
    value--;
    setValue(value);
    if(value < 0){
      setValue(0);
    }
  }
  return <> <h1>Chai and react</h1>
  <h2>Counter value {value} :</h2>
  <button onClick={increase}>Add</button>
  <button onClick={decrease}>Remove</button>
  <Card title="Chirag" hii="Chikku"></Card>

  </>
}

export default App
