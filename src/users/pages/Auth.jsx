import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';

import './Auth.css';

export default function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if(!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          isValid: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    }
    else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          },
          email: {
            value: "",
            isValid: false
          },
          password: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  }

  return (
    <>
      <Card className="authentication">
        {isLoginMode ? (<h1 className='authentication__header'>Login</h1>) : (<h1 className='authentication__header'>Sign Up</h1>)}
        <hr/>
        <form>
          {!isLoginMode && (<Input 
            id="name" 
            element="input" 
            label="Name" 
            onInput={inputHandler} 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Please enter your name"
            dark
            round
          />)}
          <Input 
            id="email" 
            element="input" 
            label="Email" 
            onInput={inputHandler} 
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]} 
            errorText="Please enter your email"
            dark
            round
          />
          <Input 
            id="password" 
            element="input" 
            label="Password" 
            onInput={inputHandler} 
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]} 
            errorText="Please enter a valid password of 8 length minimum"
            dark
            round
          />
          <Button 
            type="submit" 
            disabled={!formState.isValid}
            onClick={(event) => {
              event.preventDefault();
              console.log(formState)
            }}
            sky 
          >
            {isLoginMode ? 'Login' : 'Sign Up'}
          </Button>
        </form>
        <p className="switch-mode__para" onClick={switchModeHandler}>
          {isLoginMode ? "Sign Up" : "Login"}
        </p>
      </Card>
    </>
  )
}
