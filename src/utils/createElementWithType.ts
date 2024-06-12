import { createInputElement, createSelectElement, createSwitchElement, createCheckboxElement, createRadioElement, createTextareaElement, createNumberElement, createTextElement } from './createElement';

export default function createElementWithTpe(element) {
  let newElement = null;
  switch (element?.type) {
    case "input":
      newElement = createInputElement();
      break;
    case "select":
      newElement = createSelectElement();
      break;
    case "switch":
      newElement = createSwitchElement();
      break;
    case "checkbox":
      newElement = createCheckboxElement();
      break;
    case "radio":
      newElement = createRadioElement();
      break;
    case "textarea":
      newElement = createTextareaElement();
      break;
    case "number":
      newElement = createNumberElement();
      break;
    case "text":
      newElement = createTextElement();
      break;
    // Thêm các trường hợp khác nếu cần
    default:
      break;
  }
  return newElement;
}
