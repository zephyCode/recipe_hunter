import React from 'react'
import { useParams } from 'react-router-dom'
import RecipesList from '../components/RecipesList';

const RECIPES = [
  {
    id: 'r1',
    title: 'Tea',
    description: 'This the recipe on how to make a tea',
    image: 'https://indianfoodfreak.com/wp-content/uploads/2023/05/IMG_20230521_162825-768x528.jpg',
    creator: 'u1',
  },
  {
    id: 'r1',
    title: 'Tea',
    description: 'This the recipe on how to make a tea',
    image: 'https://indianfoodfreak.com/wp-content/uploads/2023/05/IMG_20230521_162825-768x528.jpg',
    creator: 'u2'
  }
]

export default function UserRecipes() {

    const {uid} = useParams();

    const userRecipes = RECIPES.filter(recipe => recipe.creator === uid);

  return (
    <>
      <RecipesList itemsRecipe={userRecipes}/>
    </>
  )
}
