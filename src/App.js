import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import SearchRecipes from './components/SearchRecipes';
import About from './components/About';
function App() {
  
  let [recipes,setRecipes] = useState([]);
  let [search,setSearch] = useState('');
  let [fSearch, setFSearch] = useState('chicken');
  const APP_ID = "b287f7a7";
  const APP_KEY = "bc15b0f81271e28d54e86a9cc2663a3c";
  const URL = `https://api.edamam.com/search?q=${fSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const searchRecipes = (e) => {
    setSearch(e.target.value);
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
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route path="/searchRecipes" render={(props) => <SearchRecipes searchRecipes={searchRecipes} search={search} recipes={recipes} getSearch={getSearch} />}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    </div>
  );
}

export default App;
