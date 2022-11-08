import Tab from "./Tab";

interface Props {
  activeIndex: number;
  onChange: (index: number) => void;
  tabs: string[];
}

const Tabs = ({ activeIndex, onChange, tabs }: Props) => (
  <ul className="tabs">
    {tabs.map((tabTitle, index) => (
      <Tab
        key={index}
        index={index}
        isActive={activeIndex === index}
        onChange={onChange}
      >
        {tabTitle}
      </Tab>
    ))}
  </ul>
);

export default Tabs;
