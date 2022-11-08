import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  index: number;
  isActive: boolean;
  onChange: (index: number) => void;
}

const Tab = ({ children, index, isActive, onChange }: Props) => (
  <li className={classNames({ active: isActive }, "tabs__item")}>
    <button className="tabs__btn" onClick={() => onChange(index)} type="button">
      {children}
    </button>
  </li>
);

export default Tab;
