import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInpute from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifire, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifire]: +newValue, // adding + enfront of newValue willforce a conversion of this string value to a number value.
      };
  });
}

  return (
    <>
      <Header />
      <UserInpute Inputuser={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App
