import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./users/pages/Users";

import UserRecipes from "./recipes/pages/UserRecipes";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Auth from "./users/pages/Auth";
import NewRecipe from "./recipes/pages/NewRecipe";
import "./App.css";

export default function App() {
  return (
    <Router>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/:uid/recipes" element={<UserRecipes/>}/>
        <Route path="/new/recipe" element={<NewRecipe/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Router>
  );
}