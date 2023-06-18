import React, { useState }  from 'react'
import '../Assets/Contact.scss'

export default function SuggestRecipe() {
  const [validemail, setValidmail] = useState(true);
  const [validname, setValidname] = useState(true);
  const [validCuisine, setValidCuisine] = useState(true);
  const [validIngredients, setValidIngredients] = useState(true);
  const [validRecipeInstructions, setValidRecipeInstructions] = useState(true);
  const [validemailres, setValidemailres] = useState("");
  const [validenameres, setValidnameres] = useState("");
  const [validmessage, setValidmessage] = useState(true);
  

  function submitForm(e) {
    e.preventDefault();
    if (e.target.elements.namedItem("user_name").value === "") {
      setValidnameres("Name is required");
      setValidname(false);
    } else if (
      !/^[\w-_.]{5,}$/.test(e.target.elements.namedItem("user_name").value)
    ) {
      setValidnameres(
        "Name can only have alphabets, numericals, '-', '_' and '.' and should have min length of 5."
      );
      setValidname(false);
    } else if (e.target.elements.namedItem("user_email").value === "") {
      setValidemailres("Email is required");
      setValidmail(false);
      setValidname(true);
    } else if (e.target.elements.namedItem("Cuisine").value === "") {
      setValidCuisine(false);
    } else if (e.target.elements.namedItem("Ingredients").value === "") {
      setValidIngredients(false);
    } else if (e.target.elements.namedItem("Recipe Instructions").value === "") {
      setValidRecipeInstructions(false);
    } else if (
      !/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/.test(
        e.target.elements.namedItem("user_email").value
      )
    ) {
      setValidemailres("Email given is not valid");
      setValidmail(false);
    } else if (e.target.elements.namedItem("message").value === "") {
      setValidmessage(false);
      setValidmail(true);
    } else {
      setValidmail(true);
      setValidmessage(true);
      setValidname(true);
      setValidCuisine(true);
      setValidIngredients(true);
      setValidRecipeInstructions(true);
      e.target.reset();
    }
  }
  return (
    <div className="contact width-60" id="contact">
      <div>Get in touch with us.</div>
      <form
        className="contact-form"
        onSubmit={submitForm}
      >
        <input type="text" placeholder="Name" name="user_name" label="Name"/>
        {validname ? <></> : <div>{validenameres}</div>}

        <input placeholder="Email" name="user_email" label="Email"/>
        {validemail ? <></> : <div>{validemailres}</div>}
        <input placeholder="Cuisine" name="Cuisine" label="Cuisine"/>
        {validCuisine ? <></> : <div>Cuisine is required</div>}
        <input placeholder="Meal Type" name="Meal Type" label="Meal Type"/>
        <textarea placeholder="Ingredients" name="Ingredients" label="Ingredients" />
        {validIngredients ? <></> : <div>Ingredients are required</div>}
        <textarea placeholder="Recipe Instructions" name="Recipe Instructions" label="Recipe Instructions" />
        {validRecipeInstructions ? <></> : <div>Recipe Instructions are required</div>}
        <textarea placeholder="Message" name="message" label="message" />
        {validmessage ? <></> : <div>Message cannot be empty</div>}
        <button className="button" type="submit" value="Send">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}
