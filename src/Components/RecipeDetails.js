import React from "react";
import ReactModal from "react-modal";
import { FaChevronCircleDown } from "react-icons/fa";
import "../Assets/RecipeCards.scss";

export default function RecipeDetails({searchResult,toggleContent,setContentIsOpen,contentIsOpen}) {

	return (
		<div className="recipeDetails">
			<div className={`${contentIsOpen ? 'fadein' : 'fadeout'}`}>
				<div>
					<text>Ingredients</text><hr/>
					<ul>
					{searchResult.ingredients.map((ingredient, index) => {
						return <li key={index}>{ingredient.ingredientName}</li>;
						})}
						</ul>
				</div>
				<div>
					<text>Instructions</text><br/><hr/>
					{searchResult.instructions}
				</div>
			</div>
			<div className="recipe-card-button">
				<button onClick={toggleContent}><FaChevronCircleDown className={`downarrow ${contentIsOpen && 'uparrow'}`}/>View Recipe</button>
			</div>
		</div>
	);
}
