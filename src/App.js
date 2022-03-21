import React from 'react';
import './App.css';
import { FaTimes } from 'react-icons/fa';
import JSONDATA from "./mockData.json";
import { useState,useEffect } from 'react';
import Hello from './Hello';


function App() {
  const [ searchTerm, setSearchTerm] = useState("");
   
  const [searchAdd , setsearchAdd]  = useState([]);
   
  const  onAdd = (addTerm) => {
     setsearchAdd([...searchAdd,addTerm])
  }
  useEffect(() => {
    console.log(searchAdd)
    }, [searchAdd]);


  return (
    <div >
        <img src="bgImageMain.jpg" className="bgImage"></img>
        <div className="inputDivStyle">
             <div className='add-form'>
                  <div className='form-control'>
                   <input  type="text" placeholder="Search Recipe" className="InputBoxStyle" onChange={(event) => {setSearchTerm( event.target.value)}} ></input>
                   </div>
                     <br></br>
                    <button type="submit" className="Button" onClick={()=>onAdd(searchTerm)}>Add</button>
                    <>  </>
                    <button title="Search" type="Submit" className="Button">Search</button>
             </div>
                <div>
                
                {searchAdd.map((val,key)=>{
                       return(
                        <div key={key} >
                        <div className="Addcard">
                        <text>{val}<FaTimes></FaTimes></text>   
                        </div>
                        </div>
                       )
                  })
                  }
                </div>
                
                
                {JSONDATA.filter((val) => {
                  if(searchTerm === ""){
                    // return val
                  }else if(val.recipe.toLowerCase().includes(searchTerm.toLowerCase())){ }
                }).map((val,key) => {
                 return (
                   <div key={key} >
                      <div className="card">
                      <text>{val.ingrdients}<FaTimes></FaTimes></text>   
                      </div>
                      <br></br>
                 </div>
                 )
                 })}
        </div>  
    </div>
  );
}

export default App;
 