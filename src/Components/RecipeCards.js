import React, { useState } from "react";
import "../Assets/RecipeCards.scss";
import RecipeDetails from "./RecipeDetails";

export default function RecipeCards({key,searchResult}) {
	const [contentIsOpen, setContentIsOpen] = useState(false);

	const toggleContent = () => {
		contentIsOpen ? setContentIsOpen(false) : setContentIsOpen(true);
		console.log(contentIsOpen);
	};
	return (
		<div key={key} className="recipe-card-container">
			<div className="recipe-card">
				<div className="recipe-card-title">
					<h3>{searchResult ? searchResult.recipeName : "Recipe Name"}</h3>
				</div>
				{!contentIsOpen && <div className="recipe-card-text">
					<text>Cuisine: <b>{searchResult ? searchResult?.cusine : "Recipe Cuisine"}</b></text>
					<ul><li>{searchResult ? searchResult?.diet : "Recipe Diet"}</li></ul>
				</div>}
				<RecipeDetails contentIsOpen={contentIsOpen} setContentIsOpen={setContentIsOpen} toggleContent={toggleContent} searchResult={searchResult}/> 
			</div>
		</div>
	);
}
