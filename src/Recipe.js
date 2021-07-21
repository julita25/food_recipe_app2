//if the recipes array is not empty grab label property
import React, {useState} from 'react'
import RecipeInfo from './RecipeInfo'

const Recipe = ({recipe}) => {
    const [show, setShow]= useState(false)
    const{label, image, url, ingredients} = recipe.recipe
    return (
        //target blank means that opens the linked document in a new window or tab
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <a href={url} target="_blank" rel="noopener noreferrer"> Full recipe here </a>
            <button onClick= {() => setShow(!show)}>Ingredients</button>
            {show && <RecipeInfo ingredients={ingredients}/>}{/*if show is set to true (we click ingredients button) we display the recipe infor */}
            
        </div>
    )
}

export default Recipe
