import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';

import './UserItem.css'

export default function UserItem({name, image, recipeCount, id}) {
  return (
    <div>
      <li className="user-item">
        <Card className="user-item__content" rounded>
            <Link to={`/${id}/recipes`}>
                <div className="user-item__image">
                    <Avatar image={image} alt={name}/>
                </div>
                <div className="user-item__info">
                    <h2>{name}</h2>
                    <h3>
                        {recipeCount} {recipeCount === 1 ? 'Recipe' : 'Recipes'}
                    </h3>
                </div>
            </Link>
        </Card>
      </li>
    </div>
  )
}
