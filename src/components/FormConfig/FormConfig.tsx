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

const exampleConfig = `{
  "items": [
    {
      "label": "radio",
      "options": [
        { "label": "Red", "value": "red" },
        { "label": "Green", "value": "green" },
        { "label": "Blue", "value": "blue" }
      ],
      "type": "radio",
      "value": "green"
    },
    {
      "label": "checkbox",
      "type": "checkbox",
      "value": true
    },
    {
      "label": "date field",
      "type": "date",
      "value": "2022-01-01"
    },
    {
      "label": "text field",
      "type": "text"
    },
    {
      "label": "number field",
      "type": "number",
      "value": 10
    },
    {
      "label": "textarea",
      "type": "textarea",
      "value": "lorem ipsum"
    },
    {
      "label": "Submit",
      "type": "button"
    }
  ]
}`;

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
      <textarea
        className="textarea-config"
        onChange={handleConfigChange}
        value={config}
      />
      {config && !isValid && (
        <p className="text-red">The config does not appear to be valid.</p>
      )}
      <button className="btn-apply" onClick={handleApplyClick}>
        Apply
      </button>
      <hr />
      <p>Example:</p>
      <pre>{exampleConfig}</pre>
    </div>
  );
};

export default Config;
