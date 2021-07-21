import React, {useState} from "react";
import './App.css';
import axios from "axios";
import Recipe from "./Recipe"
import Error from "./Error"
import {v4 as uuidv4} from "uuid"//this components let us create keys for each of the elements on a list
//import {getFoodData} from './foodapi'


function App() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([]);
  const [error, setError]= useState("")
  const APP_ID= "6eabbe72";
  const APP_KEY= "aa93735ef91747da24958b07035b2513"
  const baseurl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`


  const getData = async() => {
   if (query !== ""){//if the query has a text on it
    const result = await axios.get(baseurl);//api call: we call the url const
    if(!result.data.more){//if the more propertie is not true
      return setError("We could not find a food with that name")
    }
    setRecipes(result.data.hits)//hits contains all the recipes
    console.log(result)
    setError("")
    setQuery("")//after loggin result clear the field again

   }else{
     setError("Please fill the form before submitting")

   }
 
  }

  const onChange = e => {
    setQuery(e.target.value)//in the find field
  }//as we write the setWuery function tackes the value

  const onSubmit = e => {
    e.preventDefault();//prevents that when we click submit the whole page reloads
    getData();//we use getData function

  }


  return (
    <div className="App">
      <h1>Food Searching App </h1>
      <p>What is a world without food!! to make your life simple this website will provide you with simple and yummy recipes just with a click away. Just enter the name of your favorite food!</p>
      <form className="search" onSubmit={onSubmit}>
        {error !== "" && <Error error={error}/>}{/*if error is not empty display the error component */}
        <input type="text" 
          placeholder="Enter food name" 
          onChange={onChange} 
          value={query}/>
        <input type="submit" value= "search" />

      </form>
      <div className="container">
        {recipes !== [] && //if recipe array is not empty, get access of each recipe item
          recipes.map(recipe => <Recipe key={uuidv4} recipe={recipe}/>)  }
      </div>

     
    </div>
  );
}

export default App;
