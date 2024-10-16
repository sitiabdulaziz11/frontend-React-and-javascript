// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
export const user = {
    email: '',
    password: '',
    loggedIn: false,
  };
  
  // Please note: The login does not actually work!
  // This exercise is just about practicing event handling
  // You'll learn how to add user authentication to React apps later in the course!
  function App() {
    const handleLogin = () => {
        user.email = 'siti@gmail.com';
        user.password = '123';
        user.loggedIn = true;
    }

    return (
      <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Email</label>
          {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
          <input type="email" />
        </p>
  
        <p>
          <label>Password</label>
          {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
          <input type="password" />
        </p>
  
        <p id="actions">
          <button onClick={handleLogin}>Login</button>
        </p>
      </div>
    );
  }
  
  export default App;
  