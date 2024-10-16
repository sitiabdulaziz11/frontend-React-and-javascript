function InputComponent() {
    const [inputValue, setInputValue] = useState("");
  
    return (
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    );
  }

  function DisplayComponent() {
    const [inputValue, setInputValue] = useState("");
  
    return <p>{inputValue}</p>;
  }
  
  function App() {
    return (
      <div>
        <InputComponent />
        <DisplayComponent />
      </div>
    );
  }
  