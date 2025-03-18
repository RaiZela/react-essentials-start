import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from './Section.jsx'
import Section from "./Section.jsx";

export default function Examples()
{
      const [selectedTopic, setSelectedTopic] = useState("components");

      function handleClick(selectedButton) {
        //selectedButton=>'components','jsx','props','state'
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
        //tabContent = selectedButton;
      }

      let tabContent = <p>Please select a topic.</p>;

      if(selectedTopic){
        tabContent=(
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>

        );
      }

    return (
        <Section title="Examples" id="examples">
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleClick("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "JSX"}
            onClick={() => handleClick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleClick("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleClick("state")}
          >
            State
          </TabButton>
        </menu>

        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Section>

    );
}