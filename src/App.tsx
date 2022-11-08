import { useState } from "react";
import FormConfig from "./components/FormConfig/FormConfig";
import FormElementRenderer from "./components/FormElementRenderer/FormElementRenderer";
import Tabs from "./components/Tabs/Tabs";
import { FormElement } from "./types";

import "./App.css";

enum Tab {
  "Config",
  "Render",
}

const App = () => {
  const [formElements, setFormElements] = useState<FormElement[]>([]);
  const [activeTabIndex, setActiveTab] = useState(Tab.Config);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleConfigApplied = (formElements: FormElement[]) => {
    setFormElements(formElements);
    setActiveTab(Tab.Render);
  };

  return (
    <div className="app">
      <Tabs
        activeIndex={activeTabIndex}
        onChange={handleTabChange}
        tabs={["Config", "Result"]}
      />
      <div className="app__form">
        {activeTabIndex === Tab.Config && (
          <FormConfig onApplied={handleConfigApplied} />
        )}
        {activeTabIndex === Tab.Render && (
          <>
            {!formElements.length && <p>Nothing to render</p>}
            {formElements.map((element, index) => (
              /* TODO: not sure if using index for key could cause issues in this case,
              for sake of simplicity I'll keep the index */
              <FormElementRenderer key={index} element={element} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
