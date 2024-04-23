function MyFunc() {
  return "aselamu aleycum"
}

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  //const description = reactDescriptions[genRandomInt(2)] this more leaner

  return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
        {description} React concepts you will need for almost any app you are
        or
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
        </p>
      </header>
      );
}
// not used in react Header() like this here to call it outside of fun, but in App fun we call like below 1 of the two.
// we can write <Header></Header> or <Header />

function App() {
  return (
    <div>
      <MyFunc />
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
