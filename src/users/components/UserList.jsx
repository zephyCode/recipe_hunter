import React from 'react'
import UserItem from './UserItem'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import './UserList.css'


export default function UserList({items}) {
    if(!items || items.length === 0) {
        return (
            <div className="recipe-list center">
                <Card>
                    <h2>No user found...</h2>
                </Card>
            </div>
        )
    }
  return (
    <ul className="users-list">
        {items.map(user => {
            return (
                <UserItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    image={user.image}
                    recipeCount={user.recipeCount}
                />
            );
        })}
    </ul>
  )
}
