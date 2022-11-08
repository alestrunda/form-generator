export interface FormElement {
  label: string;
  type: string;
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
