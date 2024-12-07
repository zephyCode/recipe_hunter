import React from 'react'
import UserList from '../components/UserList'

const USERS = [
  {
    id: 'u1',
    image: 'https://photosdp.com/wp-content/uploads/2024/06/hidden-face-girl-dp-39.jpg',
    name: 'Tanya',
    recipeCount: 3
  }
];

export default function Users() {
  return (
    <>
        <UserList items={USERS}/>
    </>
  )
}
