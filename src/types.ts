export interface FormElement {
  label: string;
  type: string;
  value?: string | boolean | number;
}

export function isFormElement(element: unknown): element is FormElement {
  if (typeof element !== "object" || element === null) {
    return false;
  }
  if (!("label" in element) || !("type" in element)) {
    return false;
  }
  return true;
}
