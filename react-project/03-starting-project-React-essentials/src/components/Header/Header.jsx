import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    //const description = reactDescriptions[genRandomInt(2)] this more leaner
    return (
        <header>
          <img src={reactImg} alt="Stylized atom}" />
          <h1>React Essentials</h1>
          <p>
         
          {reactDescriptions[genRandomInt(2)]}{/*or {description}  */} React concepts you will need for almost any app you are
          going to build!
          </p>
        </header>
        );
  }

  // not used in react Header() like this here to call it outside of fun, but in App fun we call like below, 1 of the two.
  // we can write <Header></Header> or <Header />