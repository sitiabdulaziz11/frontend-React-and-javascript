import {useState} from 'react'
//import componentImg from './assets/component.png'

import {EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';

function MyFunc() {
  return "aselamu aleycum"
};

// instade of A, we can also use <CoreConcept {...CORE_CONCEPTS[0]} /> with the help of spread operator.

function App() {
//let tabContent = 'please click a button';
// useState() ,the value we get here is an array with exactly two elements. when we use stateArray
//const stateArray = useState('please click a button');
// but we can use object destructering to store this two value of stateArray.
//const [selectedTopic, setSelectedTopic] = useState('please click a button');
//const [selectedTopic, setSelectedTopic] = useState('components');
const [selectedTopic, setSelectedTopic] = useState();
// the 1st value os useState is for the 1st variable, and the second value of stateArray in this case for "setSelectedTopic" is the function that we can use to update it.
  function handleSelect(selectedButton) {
    // selectedButton may be => 'components', 'JSX', 'props', or 'state'
    //console.log(selectedButton)
    //tabContent = selectedButton;
    //console.log(tabContent);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    
  }

  console.log('App component executing');

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = 
    <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
  }

  return (
    <div>
      <MyFunc />
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {['hello', 'world', 'or', <p>hello</p>, <p>world</p>]}{/*so this means jsx is capable of dealing wth arrays of renderable data e.g array or jsx code */}
          <ul>
            {/*"H" */}{CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
            {/*Warning: Each child in a list should have a unique "key" prop. not solved */}
            {/*A
            <CoreConcept
            title="Component"
            description="The core UI building block"
            image={componentImg}
            />*/}
            {/* "H"here we transform CORE_CONCEPTS array of js object to array of jsx elements. we can transform arrays in js with the help of built-in map() method. which produces a new array based on the existing array.  and that function atomatically receives an array item as an input or an argument and the name is up to us. then we can return the code we want to transform this item to. we use map  to output a list of data. */}
            
            {/* all this indexed js 0-3 replaced by jsx on "H" one line of code.
            {A}<CoreConcept title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} />*/}
          </ul>
        </section>
        
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>{/*menu is built-in html element which used to create a list of buttons*/}
            {/*<li><button></button></li>
            <li><button></button></li> this is repettion and b/c of it, this list button done on separet file
            by creating new component.*/}

            {/* our component "<TabButton>" wrap other components
            or other content"Components" like this: <TabButton>Components</TabButton> is called component composition. is using children
            <TabButton label='Components' /> is using Attributes.
            <TabButton label='JSX' />
            <TabButton label='Props' />
            <TabButton label='State' />
            */}
          
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
          {/*Daynamic Content
          {tabContent}
          {selectedTopic}*/}
          {/*{selectedTopic === 'undefined'} <p>Please select a topic.</p> or below*/}
          
          {/* alternateve way for condition on react
           1 
           {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          ) : null}

           2 {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
            </div>
          )} 
          3 other alternateve way for condition on react
          {!selectedTopic && <p>Please select a topic.</p> }
          {selectedTopic && (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )} with {tabContent} 4 ways of condition
          */}
        </section>
      </main>
    </div>
  );
}
export default App;
