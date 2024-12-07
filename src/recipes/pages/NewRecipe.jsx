import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import './NewRecipe.css';


export default function NewRecipe() {
    const [formState, inputHandler] = useForm(
        {
            title: '',
            isValid: false
        },
        {
            descrption: '',
            isValid: false
        },
        {
            procedure: '',
            isValid: false
        },
        false
    );

    const recipeFormSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState);
    }

  return (
    <>
        <form className="recipe-form" onSubmit={recipeFormSubmitHandler}>
            <Input
                id="title"
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                label="Recipe Title"
                errorText="Please fill the title field..."
                onInput={inputHandler}
                dark
            />
            <Input
                id="description"
                element="textarea"
                validators={[VALIDATOR_REQUIRE()]}
                label="Recipe Description"
                errorText="Please fill the description field..."
                onInput={inputHandler}
                dark
            />
            <Input
                id="procedure"
                element="textarea"
                validators={[VALIDATOR_REQUIRE()]}
                label="Procedure in making"
                errorText="Please fill the description field..."
                onInput={inputHandler}
                dark
            />
            <Button type="submit" sky disabled={!formState.isValid}>Add Recipe</Button>
        </form>
    </>
  )
}
