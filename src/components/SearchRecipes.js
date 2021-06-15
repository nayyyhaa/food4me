import React from 'react';
import Recipes from './Recipes';

const SearchRecipes = ({getSearch, fSearch, search, searchRecipes, recipes }) => (
    <div>
        <form className="form" onSubmit={getSearch}>
            <input className="search-input" type="text" value={search} onChange={searchRecipes}/>
            <button className="search-btn" type="submit">Search</button>
        </form>
        <h2>Results for: {fSearch}</h2>
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

export default SearchRecipes;