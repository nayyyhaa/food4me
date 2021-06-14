import React from 'react';
import '../App.css';

const Recipes = ({title, cuisineType, image, ingredients}) => (
    <div className="recipe">
        <h1>Dish Name: {title}</h1>
        <h3>Cuisine Type: {cuisineType? cuisineType: "No information"}</h3>
        <img src={image} alt="recipe img"></img>
        <h2>Ingredients:</h2>
        {ingredients.map(ingredient => (
            <p>{ingredient}</p>
        ))}
    </div>
);

export default Recipes;