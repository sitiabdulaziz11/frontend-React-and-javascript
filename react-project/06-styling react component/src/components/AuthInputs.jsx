import { useState } from 'react';
import {styled} from 'styled-components';

import Button from './Button.jsx';
import Input from './Input.jsx';

const ControlsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
//`${}` used for inject dynamic value to the string in js

  return (
    <div id="auth-inputs">
      <ControlsDiv>
        {/* <p className='paragraph'> */}
          {/* <Label className={`lable ${emailNotValid ? 'invalid' : ''}`}>Email</Label>  */}
          {/* <Label $invalid={emailNotValid}>Email</Label>  */}
          <Input
          lable="Email"
          // $invalid={emailNotValid}
          invalid={emailNotValid}
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        {/* </p> */}
        {/* <p> */}
          {/* <Label className={`lable ${passwordNotValid ? 'invalid' : ''}`}>Password</Label> */}
          {/* <Label $invalid={passwordNotValid}>Password</Label> */}
          <Input
          // $invalid={passwordNotValid}
            invalid={passwordNotValid}
            label={'Password'}
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        {/* </p> */}
      </ControlsDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        {/* <button className='button' onClick={handleLogin}>Sign In</button> */}
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
