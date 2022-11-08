import { useState } from "react";
import Config from "./components/Config/Config";
import FormElementRenderer from "./components/FormElementRenderer/FormElementRenderer";
import Tabs from "./components/Tabs/Tabs";
import { FormElement } from "./types";

import "./App.css";

const App = () => {
  const [formElements, setFormElements] = useState<FormElement[]>([]);
  const [activeTabIndex, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleConfigApplied = (formElements: FormElement[]) => {
    console.log(formElements);
    setFormElements(formElements);
    setActiveTab(1);
  };

  return (
    <div className="app">
      <Tabs
        activeIndex={activeTabIndex}
        onChange={handleTabChange}
        tabs={["Config", "Result"]}
      />
      <div className="app__form">
        {activeTabIndex === 0 && <Config onApplied={handleConfigApplied} />}
        {activeTabIndex === 1 && (
          <div>
            {formElements.map((element, index) => (
              /* TODO: is it ok to use index as a key, or generate unique id? */
              <FormElementRenderer key={index} element={element} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
