//this components lets know the user if the food its searching is not on our database
//or if her is submitting an empty form


//to achieve the first. there is a property called more that changes to true or false depending if the food was found
import React from 'react'

const Error = ({error}) => {
    return (
        <div className="error">
            <h3>{error}</h3>{/*we use the variable error passed as a prop from the app.js component */}
            
        </div>
    )
}

export default Error
