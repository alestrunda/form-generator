import { useState } from "react";
import Tabs from "./components/Tabs/Tabs";
import "./App.css";

const App = () => {
  const [activeTabIndex, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Tabs
        activeIndex={activeTabIndex}
        onChange={handleTabChange}
        tabs={["Config", "Result"]}
      />
      {activeTabIndex === 0 && <div>Config</div>}
      {activeTabIndex === 1 && <div>Result</div>}
    </div>
  );
};

export default App;
