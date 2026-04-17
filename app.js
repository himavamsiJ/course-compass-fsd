import React,{useState}from"react";
function Welcome(props){return<h2>Hello,{props.name}</h2>}
function Counter(){const[c,setC]=useState(0);return(<><p>Count:{c}</p><button
onClick={()=>setC(c+1)}>+</button></>);}
export default function App(){return(<div><Welcome name="Sai"/><Counter/></div>);}