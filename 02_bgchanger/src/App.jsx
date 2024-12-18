import "bootstrap/dist/css/bootstrap.min.css"
import Buttonn from './button'
import './App.css'
import { useState } from "react"

function App() {
  const [color,setColor]=useState("#000");
  const handClick = (colour)=>{
     return setColor(colour);
  }

  return ( <div className="main" style={{backgroundColor : color}}>
  <h1>Chai & React</h1>
  <Buttonn handClick={handClick}></Buttonn>
  </div>
  )
}

export default App;
