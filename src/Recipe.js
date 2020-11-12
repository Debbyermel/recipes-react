import React, { useState, useEffect } from 'react';
import './App.css';

function Recipe() {
  const APP_ID = 'c00f1910';
  const APP_KEY = '006bba617a6c553a45d20ee23acb76f3';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('berries');
  const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

  const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes-list">
        {recipes.map(recipe => (
          <div className="recipe-list">
            <h3>{recipe.recipe.label}</h3>
            <p>{recipe.recipe.key}</p>
            <img src={recipe.recipe.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;