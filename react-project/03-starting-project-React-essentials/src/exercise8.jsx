export const user = {
    name: '',
  };
  
  function App() {
    // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
    function handleCreateUser(name) {
      user.name = name;
    }
  
    return (
      <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Name</label>
          {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
          <input type="text" />
        </p>
  
        <p id="actions">
          
          <button onClick={() => handleCreateUser('name')}>Create User</button>
          {/* this oR the above bothe correct,  <button onClick={handleCreateUser}>Create User</button> */}
        </p>
      </div>
    );
  }
// The built-in elements support props like onClick to allow you to define functions that should be triggered when the specified event occurs.
//  By wrapping the execution of your event handling function with another function, it's that other function that's passed as a value to the event-handling prop. Therefore, your main function (=> handleClick in this example) does NOT get executed too early but instead only when the event occurs.