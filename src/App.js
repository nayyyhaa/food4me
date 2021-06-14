import React, { useState, useEffect } from 'react';
import Recipes from './components/Recipes';
import './App.css';

function App() {
  
  let [recipes,setRecipes] = useState([]);
  let [search,setSearch] = useState('');
  let [fSearch, setFSearch] = useState('chicken');
  const APP_ID = "b287f7a7";
  const APP_KEY = "bc15b0f81271e28d54e86a9cc2663a3c";
  const URL = `https://api.edamam.com/search?q=${fSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const searchRecipes = (e) => {
    setSearch(e.target.value);
    console.log(search,e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setFSearch(search);
  }
  useEffect(() => {
    getRecipes();
  },[fSearch]);

  const getRecipes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input className="search-input" type="text" value={search} onChange={searchRecipes}/>
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
        {
          recipes.map(recipe => (
            <Recipes key={recipe.recipe.label}
            title={recipe.recipe.label}
            cuisineType={recipe.recipe.cuisineType}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
