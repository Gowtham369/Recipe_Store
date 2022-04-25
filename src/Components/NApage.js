import React from 'react'
import '../Assets/Contact.scss';

export default function NApage({searchTerm,searchAdd,searchType,searchResults}) {
  return (
    <div className='na-page'>
      {(searchAdd.length!=0 || searchTerm!='') && searchResults!='' ? <><text>!!!</text><h1>We have not yet tried that {searchType==1?'Ingredient':'Recipe'}.</h1>
      <h2>We would love suggestions for what you might like us to try.</h2></>:<><text>...</text><h2>Try searching for something</h2></>}
    </div>
  )
}
