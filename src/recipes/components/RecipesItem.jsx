import React from 'react'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'

import './RecipesItem.css'

export default function RecipesItem({image, title, description}) {
  return (
    <li className="recipe-item">
    <Card className="recipe-item__content">
      <div className="recipe-item__image">
        <img src={image} alt={title} />
      </div>
      <div className="recipe-item__info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <ul className="recipe-item__info">
        <li>step 1</li>
        <li>step 1</li>
        <li>step 1</li>
        <li>step 1</li>
        <li>step 1</li>

      </ul>
        <div className="recipe-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button sky>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
    </Card>
  </li>
  )
}
