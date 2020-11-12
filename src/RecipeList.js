import React from 'react';
import style from './recipe.module.css';

const RecipeList = ({ title, image, calories, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <small>Calories {Math.round(calories)}</small>
      <ol className={style.list}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeList;