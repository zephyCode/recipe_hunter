import React from 'react'
import { NavLink, useParams } from 'react-router-dom';

import './NavLinks.css';

export default function NavLinks({onclick}) {
  const userId = useParams();
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to="/" onClick={onclick}>All Users</NavLink>
      </li>
      <li>
        <NavLink to={`/${userId}/recipes`} onClick={onclick}>My Recipes</NavLink>
      </li>
      <li>
        <NavLink to="/new/recipe" onClick={onclick}>Add Recipe</NavLink>
      </li>
      <li>
        <NavLink to="/auth" onClick={onclick}>Authentication</NavLink>
      </li>
    </ul>
  )
}
