// import { useState } from 'react'
// import './App.css'
// import { useCallback } from 'react';
// import { useEffect } from 'react';

// function App() {
//   const [length,setLength]=useState("");
//   const [number,setNumber]=useState("false");
//   const [char,setChar]=useState("false");
//   const [password,setPassword]=useState("");
  
// const pasGen = useCallback(()=>{
//   let pss ="";
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   if(number) str +='1234567890'
//   if(char)  str +='!@#$%^&*()_+';
//   for (let index = 1; index <=length; index++) {
//     const value = Math.floor(Math.random()*str.length+1);
//     pss+=str.charAt(value);
//   }
// },[length,number,char,password])
 
// useEffect(()=>{pasGen()},[length,number,char]);

//   return (
//     <>
//     <h1>Password Generator</h1>
//     <input type="text" name="" id="" value={password}/>
//     <button>sumbit</button>
//     <input type="range" name="" id="" min={6} max={18} value={length} onChange={(e)=>{setLength(e.target.value)}} />
//     <label htmlFor="">length:{length}</label>
//     <input type="checkbox" name="" id="numberinput" onChange={(e)=>{setNumberumber((prev)=> !prev);}} />
//     <label htmlFor="numberinput">Number</label>
//     <input type="checkbox" name="" id="charinput"onChange={(e)=>{setChar((prev)=> !prev);}} />
//     <label htmlFor="Charinput">Character</label>
    
//     </>
//   )
// }

// export default App


import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');

  const pasGen = useCallback(() => {
    let pss = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += '1234567890';
    if (char) str += '!@#$%^&*()_+';
    for (let index = 0; index < length; index++) {
      const value = Math.floor(Math.random() * str.length);
      pss += str.charAt(value);
    }
    setPassword(pss);
  }, [length, number, char]);

  useEffect(() => {
    pasGen();
  }, [pasGen]);

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <input type="text" value={password} readOnly />
      <button onClick={pasGen}>Generate Password</button>
      <input
        type="range"
        min={6}
        max={18}
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <label>Length: {length}</label>
      <input
        type="checkbox"
        id="numberinput"
        checked={number}
        onChange={() => setNumber((prev) => !prev)}
      />
      <label htmlFor="numberinput">Number</label>
      <input
        type="checkbox"
        id="charinput"
        checked={char}
        onChange={() => setChar((prev) => !prev)}
      />
      <label htmlFor="charinput">Character</label>
    </div>
  );
}

export default App;

