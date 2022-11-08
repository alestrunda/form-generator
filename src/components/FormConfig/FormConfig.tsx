import { useState } from "react";
import { FormElement, isFormElement } from "../../types";

interface Props {
  onApplied: (
    formElements: FormElement[],
    formTitle: string | undefined
  ) => void;
}

const parseConfig = (config: string) => {
  const { items, title } = JSON.parse(config);
  items.forEach((item: unknown) => {
    if (!isFormElement(item)) {
      throw new Error("Wrong element syntax");
    }
  });
  if (!["string", "undefined"].includes(typeof title)) {
    throw new Error("Wrong title syntax");
  }
  return { items: items as FormElement[], title: title as string | undefined };
};

const exampleConfig = `{
  "title": "Form 1",
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
    const { items: formElements, title: formTitle } = parseConfig(config);
    onApplied(formElements, formTitle);
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
