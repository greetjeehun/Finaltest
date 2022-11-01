import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
    const [id,setid]=useState();
    const selectall=()=>{
        axios.get("/select")
            .then((res)=>{
                console.log(res.data);
                console.log("000");
            })
    }
  return (
    <div className="App">
        <button type={"button"} onClick={selectall}>seaalect</button>
        <h1>Hello World!</h1>
    </div>
  );
}

export default App;
