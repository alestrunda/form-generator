import { FormElement } from "../../types";

const FormElementRenderer = ({ element }: { element: FormElement }) => {
  if (element.type === "button") {
    return (
      <div className="form-row">
        <button type="button">{element.label}</button>
      </div>
    );
  }

  return (
    <div className="form-row">
      <label className="form-row__label">{element.label}</label>
      {element.type === "checkbox" && (
        <>
          <input type="checkbox" checked={element.value === true} />
        </>
      )}
      {element.type === "radio" && (
        <>
          <input type="radio" />
        </>
      )}
      {["date", "number", "text"].includes(element.type) && (
        <input type={element.type} value={element.value?.toString()} />
      )}
      {element.type === "textarea" && (
        <textarea value={element.value?.toString()} />
      )}
    </div>
  );
};

export default FormElementRenderer;
