import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
 {/* buttonsContainer="menu" if we use built-in or {Section} if we use custom tabs ont the component with angle bracket like <Section />, but  just identifyer {Section}, to setting component types Dynamically. we should use string elements for built in elements and curly braces for custom elements   */}

 {/* "K" ButtonContainer="menu" we also remove this here and we set it in tabs file for ButtonContainer = 'menu'*/}
    return (
        <Section title="Examples" id="examples">
          {/* <h2>Examples</h2> replaced with title="Examples" the above*/}
          <Tabs 
        // "K" ButtonContainer="menu" 
          buttons={
          <>
          <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >{/*all onSelect replace with onClick */}
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton></>
            }
            >
            {tabContent}
            </Tabs> 
        </Section>
    );
}
