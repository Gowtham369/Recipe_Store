import React from 'react'
import "./App.css";
import { FaTimes } from "react-icons/fa";
import JSONDATA from "./mockData.json";
import { useState, useEffect } from "react";
import "./App.scss";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");

	const [searchAdd, setsearchAdd] = useState([]);

	const onAdd = addTerm => {
		setsearchAdd([...searchAdd, addTerm]);
	};
	useEffect(() => {
		console.log(searchAdd);
	}, [searchAdd]);
	const deleteItem = index => {
		const newArray = [...searchAdd];
		newArray.splice(index, 1);
		setsearchAdd(newArray);
	};

  return (
    <div className="inputDivStyle">
				<div className="add-form">
          <div className="radio-group">
        <div className="pretty-radio">
						<input type="radio" className="radio" name="my-radio" />
						<span className="radio-look"></span>
						Search by Ingredient
					</div>
					<div className="pretty-radio">
						<input type="radio" className="radio" name="my-radio" />
						<span className="radio-look"></span>
						Search by Recipe
					</div></div>
					<div className="form-control">
						<input
							type="text"
							placeholder="Add Ingredients and Search"
							className="InputBoxStyle"
							onChange={event => {
								setSearchTerm(event.target.value);
							}}
						></input>
					</div>
					<br></br>
					<button type="submit" className="Button" onClick={() => onAdd(searchTerm)}>
						Add
					</button>
					<> </>
					<button title="Search" type="Submit" className="Button">
						Search
					</button>
				</div>
				<div className="Addcard-group">
					{searchAdd.map((val, key) => {
						return (
								<div className="Addcard" key={key}>
									<text>
										{val}
									</text>
										<FaTimes onClick={() => deleteItem(key)}></FaTimes>
								</div>
						);
					})}
				</div>

				{JSONDATA.filter(val => {
					if (searchTerm === "") {
						// return val
					} else if (val.recipe.toLowerCase().includes(searchTerm.toLowerCase())) {
					}
				}).map((val, key) => {
					return (
						<div key={key}>
							<div className="card">
								<text>
									{val.ingrdients}
									<FaTimes></FaTimes>
								</text>
							</div>
							<br></br>
						</div>
					);
				})}
			</div>
  )
}
