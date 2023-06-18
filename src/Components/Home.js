import React from "react";
import "../App.css";
import { FaTimes } from "react-icons/fa";
import JSONDATA from "../mockData.json";
import { useState, useEffect } from "react";
import RecipeCards from "./RecipeCards";
import axios from "axios";
import { Pagination, PaginationNav, PaginationResults } from "./Pagination";
import NApage from "./NApage";

export default function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchType, setSearchType] = useState(1);
	const [searchResults, setSearchResults] = useState('');
	const [searchAdd, setsearchAdd] = useState([]);
	const inpRef = React.createRef('');

	const onAdd = addTerm => {
		setsearchAdd([...searchAdd, addTerm]);
		inpRef.current.value = "";
	};
	useEffect(() => {
		console.log(searchAdd);
	}, [searchAdd]);
	const deleteItem = index => {
		const newArray = [...searchAdd];
		newArray.splice(index, 1);
		setsearchAdd(newArray);
	};

	const onChangeSearchType = e => {
		setSearchType(e);
		console.log("searchType", searchType);
		setsearchAdd([]);
	};

	useEffect(() => {
		console.log('searchResults',searchResults)
	}, [searchResults]);
	const searchApiCall = async () => {
		try{
			var t0 = performance.now();


			var res = await axios.get(`http://127.0.0.1:5000/api/recipe/${searchType==1?`byIngredients/?ingredients=${searchAdd.join('|')}`:`byName/?recipeName=${searchTerm}`}`, {
				auth: {
					 username: 'admin',
					 password: 'Admin123'
				}
			 });
			 var data = res.data;
			 var t1 = performance.now();
			 console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
			 
		}catch(err){
			console.log('status',err);
		}
		console.log('res',res,);
		console.log('data',data);
		setSearchResults(data);
	};

	let accordionItems = new Array();
/* 	useEffect(() => {
		console.log("searchResults", searchResults);
		for (let i = 0; i < searchResults && searchResults.length; ++i)
		accordionItems.push(
			<RecipeCards key={i} searchResult={searchResults[i]} />
		);	}, [searchResults]); */



	return (
		<div>
			<div className="inputDivStyle">
				<div className="add-form">
					<div className="radio-group">
						<div className="pretty-radio">
							<input type="radio" className="radio" onChange={e => onChangeSearchType(1)} checked={searchType == 1} name="my-radio" />
							<span className="radio-look"></span>
							<label>Search by Ingredient</label>
						</div>
						<div className="pretty-radio">
							<input type="radio" className="radio"onChange={e => onChangeSearchType(2)} checked={searchType == 2} name="my-radio" />
							<span className="radio-look"></span>
							<label>Search by Recipe</label>
						</div>
					</div>
					<div className="form-control">
						<input
							type="text"
							label="Search"
							ref={inpRef}
							placeholder="Add Ingredients and Search"
							className="InputBoxStyle"
							onChange={event => {
								setSearchTerm(event.target.value);
							}}
						></input>
					</div>
					<br></br>
					<div className="button-group">
						{searchType == 1 && (
							<button type="submit" className="Button" onClick={() => onAdd(searchTerm)}>
								Add
							</button>
						)}
						<button title="Search" type="Submit" className="Button" onClick={searchApiCall}>
							Search
						</button>
					</div>
				</div>
				<div className="Addcard-group">
					{searchAdd.map((val, key) => {
						return (
							<div className="Addcard" key={key}>
								{val}
								<FaTimes onClick={() => deleteItem(key)}></FaTimes>
							</div>
						);
					})}
				</div>

				{/* 	{JSONDATA.filter(val => {
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
			})} */}
			</div>
			<div className="recipe-cards-wrap">
			{searchResults && searchResults.length > 0 ? <Pagination 
					limit= {6}
					results= {true}
					skip= {true}
					child= {accordionItems}
					skipToFirstLabel= {'<<'}
					previousLabel= {'<'}
					nextLabel= {'>'}
					skipToLastLabel= {'>>'}
					pagesToTop= {false}
					pagesToBottom= {true}
				>
 {Object.keys(searchResults)
   .map((key, i) => {
 		return	<RecipeCards key={key} searchResult={searchResults[i]} />
   })}

				</Pagination>
				: 
				<NApage searchTerm={searchTerm} searchAdd={searchAdd} searchType={searchType} searchResults={searchResults} />
}</div>
		</div>
	);
}
