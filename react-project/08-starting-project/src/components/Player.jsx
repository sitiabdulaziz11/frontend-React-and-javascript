import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();

  const [enterdName, setEnterdName] = useState('');
  // const [submitted, setSubmitted] = useState(false);
  
  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnterdName(event.target.value);
  // }

  function handleClick() {
    setEnterdName(playerName.current.value);
    // setSubmitted(true);
    playerName.current.value = ''; // this is imperative code not declarative, b/c we are clearly instructing the browser to set the value of the input to an empty string. w/c is violating that the rule or idea that react should not handle all DOM intraction.

    // for a case where you just clear an input w/c is ont connected to any other state or anything, writing code like this is good b/c it allows us to save a lot of code.

    // we should be careful that not start using refs to read and manipulate all kind of values on your page b/c that is not the idea behind react. but we can use it to using state and other mechanisms.

  }
  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enterdName : 'unknown entity'}</h2> */}
      {/* <h2>Welcome {enterdName ? enterdName : 'unknown entity'}</h2> this is the same with blow line.*/}
      <h2>Welcome {enterdName ?? 'unknown entity'}</h2>
      {/* if true the first one , if not the second one */}
      <p>
        <input ref={playerName}
          type="text"
        // {/*onChange={handleChange} */ }
        // value={enterdName} all this are remove and only ref is enought. 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
