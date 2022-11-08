import { useState } from "react";
import Config from "./components/Config/Config";
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
    setFormElements(formElements);
    setActiveTab(1);
  };

  return (
    <div>
      <Tabs
        activeIndex={activeTabIndex}
        onChange={handleTabChange}
        tabs={["Config", "Result"]}
      />
      {activeTabIndex === 0 && (
        <div>
          <Config onApplied={handleConfigApplied} />
        </div>
      )}
      {activeTabIndex === 1 && <div>Result</div>}
    </div>
  );
};

export default App;
