export interface FormElementOption {
  label: string;
  value: string;
}

export interface FormElement {
  label: string;
  options?: FormElementOption[];
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
  if (typeof (element as FormElement).label !== "string") {
    return false;
  }
  if (typeof (element as FormElement).type !== "string") {
    return false;
  }
  if (
    !["string", "boolean", "number", "undefined"].includes(
      typeof (element as FormElement).value
    )
  ) {
    return false;
  }
  if (
    (element as FormElement).options &&
    typeof (element as FormElement).options !== "object"
  ) {
    return false;
  }
  return true;
}
