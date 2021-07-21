import React from 'react'
import {v4 as uuidv4} from "uuid"

const RecipeInfo = ({ingredients}) => {
    return ingredients.map(ingredient => {
        return(
            <ul key={uuidv4()} className="ingredient-list">
                <li>{ingredient.text}
                </li>
                <li>Weight: {ingredient.weight}
                </li>

            </ul>

        )

    })
       
}

export default RecipeInfo
