import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import image from "./IMG_0006.jpg";
import "./App.scss";
import About from "./About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";


function App() {


	return (
		<div>
			<img src={image} className="bgImage"></img>
			<Router>
				<NavBar />
				<Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/contact' element={<Contact />}/>
		    </Routes>
			</Router>
		</div>
	);
}

export default App;
