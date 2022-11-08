import { useState } from "react";
import { FormElement, isFormElement } from "../../types";

interface Props {
  onApplied: (formElements: FormElement[]) => void;
}

const parseConfig = (config: string) => {
  const { items } = JSON.parse(config);
  items.forEach((item: unknown) => {
    if (!isFormElement(item)) {
      throw new Error("Wrong element syntax");
    }
  });
  return items as FormElement[];
};

const Config = ({ onApplied }: Props) => {
  const [config, setConfig] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleConfigChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConfig(e.target.value);
    try {
      parseConfig(e.target.value);
      setIsValid(true);
    } catch (e) {
      setIsValid(false);
    }
  };

  const handleApplyClick = () => {
    if (!isValid) {
      return;
    }
    const formElements = parseConfig(config);
    onApplied(formElements);
  };

  return (
    <div>
      <textarea onChange={handleConfigChange} value={config} />
      {config && !isValid && <p>The config does not appear to be valid.</p>}
      <button className="btn-apply" onClick={handleApplyClick}>
        Apply
      </button>
    </div>
  );
};

export default Config;
