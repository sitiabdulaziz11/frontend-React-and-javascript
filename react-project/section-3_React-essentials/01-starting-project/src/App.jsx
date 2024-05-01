//import componentImg from './assets/component.png'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';


function MyFunc() {
  return "aselamu aleycum"
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
            {/*A
            <CoreConcept
            title="Component"
            description="The core UI building block"
            image={componentImg}
            />
            */ }
            <CoreConcept title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>{/*menu is used to create alist of buttons*/}
            {/*<li><button></button></li>
            <li><button></button></li> this done on separet file
            with component.*/}

            {/* this our component wrap other components
            or other content is called component composition.
            <TabButton>Components</TabButton>*/}

            <TabButton label='Components' />
            <TabButton label='JSX' />
            <TabButton label='Props' />
            <TabButton label='State' />
          </menu>
        </section>
      </main>
    </div>
  );
}
export default App;
