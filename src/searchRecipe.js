import React from 'react'

function searchRecipe() {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Search Recipe</label>
        <input type="text" placeholder="Search Recipe"></input>
      </div>
      <button type="submit" className="Button">Add</button>
    </form>
  )
}
export default searchRecipe