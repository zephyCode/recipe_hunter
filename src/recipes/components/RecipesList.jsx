import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import RecipesItem from './RecipesItem';
import Button from '../../shared/components/FormElements/Button';
import './RecipesList.css';

const RecipesList = ({itemsRecipe}) => {
  if (itemsRecipe.length === 0) {
    return (
      <div className="recipe-list center">
        <Card>
          <h2>No recipes found. Maybe create one?</h2>
          <Button sky>Share Recipe</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="recipe-list">
      {itemsRecipe.map(recipe => {
            return (
              <RecipesItem
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                description={recipe.description}
              />
            );
        })}
    </ul>
  );
};

export default RecipesList;