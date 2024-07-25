import {useState} from 'react';


export default function Player() {
  const [enterdName, setEnterdName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnterdName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enterdName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterdName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
