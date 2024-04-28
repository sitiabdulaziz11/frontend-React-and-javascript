import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

function MyFunc() {
  return "aselamu aleycum"
}

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  //const description = reactDescriptions[genRandomInt(2)] this more leaner
  // or {description} React concepts you will need for almost any app you are/ we put this line of code on line 21 if we use this way.
        

  return (
      <header>
        <img src={reactImg} alt="Stylized atom}" />
        <h1>React Essentials</h1>
        <p>
       
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
        </p>
      </header>
      );
}
// not used in react Header() like this here to call it outside of fun, but in App fun we call like below 1 of the two.
// we can write <Header></Header> or <Header />

/* WE CAN also use this func like below with desturactering
function CoreConcept (props) {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}*/

function CoreConcept ({image, title, description}) {  // this is object desturactering.
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
// instade of line 65 to 67, we can also use <CoreConcept {...CORE_CONCEPTS[0]} /> with the help of spread operator.

function App() {
  return (
    <div>
      <MyFunc />
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}


export default App;
