import React from 'react';
import './App.css';
import { FaTimes } from 'react-icons/fa';
import JSONDATA from "./mockData.json";
import { useState } from 'react';


function App() {
  const [ searchTerm, setSearchTerm] = useState("");
   
  const [searchAdd , setsearchAdd]  = useState([
    {
      recipe : '',
      ingrdients : '' 
    },
  ]);
   
   const addSearch = () => {
    <div className="card">
    <text>{searchAdd.ingrdients}</text>   
    </div>
   }
  const  onAdd = (searchTerm) => {
     const ingrdients  = ' '
     const newAddingrdients = searchTerm
     setsearchAdd([...searchAdd,newAddingrdients])
     console.log(searchAdd)
  }

const onSubmit = (e) => {
   e.preventDefault()
   onAdd(searchTerm) 
   setSearchTerm('')
}



  return (
    <div >
        <img src="bgImageMain.jpg" className="bgImage"></img>
         
        <div className="inputDivStyle">
             <form className='add-form' onSubmit={onSubmit}>
                  <div className='form-control'>
                   
                   <input  type="text" placeholder="Search Recipe" className="InputBoxStyle" value={searchTerm} onInput = {(event) => {setSearchTerm( event.target.value); }}></input>
                   </div>
                     <br></br>
                    <button type="submit" className="Button">Add</button>
                    <>  </>
                    <button title="Search" type="Submit" className="Button">Search</button>
             </form>
                <div>
                
                {searchAdd.map((val,key)=>{
                       return(
                        <div key={key} >
                        <div className="Addcard">
                        <text>{val.ingrdients}<FaTimes></FaTimes></text>   
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
 