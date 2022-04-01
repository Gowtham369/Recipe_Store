// import React from "react";
// import './filter.css';
// import JSONDATA from "./mockData.json";
// import { useState } from 'react';
// function filter() {
//     const [ searchTerm, setSearchTerm] = useState("");
//     return (
     
//              <div className="inputDivStyle">
//                   <input  type="text" placeholder="Search Recipe" className="InputBoxStyle" onInput = {(event) => {setSearchTerm( event.target.value); }}></input>
//                   <button title="Add" type="Submit" className="Button">Add</button>
//                     <br></br>
//                   <button title="Search" type="Submit" className="Button">Search</button>
//                   {JSONDATA.filter((val) => {
//                     if(searchTerm === ""){
//                       return val
//                     }else if(val.recipe.toLowerCase().includes(searchTerm.toLowerCase())){return val}
//                   }).map((val,key) => {
//                    return (
//                      <div key={key}>
//                         <div className="card">
//                         <text>{val.recipe}</text>  
//                         </div>
//                         <br></br>
//                    </div>
//                    )
//                    })}
//              </div>  
      
//     );
//   }
  
//   export default filter;
   