// Hàm tạo phần tử input
import { v4 as uuidv4 } from 'uuid';
export const createInputElement = () => {
  return {
    id: "Input" + uuidv4(),
    type: "input",
    name: "Input",
    options: {
      variable: { id: null },
      hideLabel: true,
      value: "",
      placeholder: "",
      width: null,
      height: null,
      labelWidth: 100,
      maxLength: null,
      minLength: null,
      disabled: false,
      showCount: false,
    },
  };
};

// Hàm tạo phần tử select
export const createSelectElement = () => {
  return {
    id: "Select" + uuidv4(),
    type: "select",
    name: "Select",
    options: {
      variable: { id: null },
      hideLabel: true,
      value: null,
      options: [],
      isMultiple: false,
      placeholder: "Please select",
      width: null,
      height: null,
      labelWidth: 100,
    },
  };
};

// Hàm tạo phần tử switch
export const createSwitchElement = () => {
  return {
    id: "Switch" + uuidv4(),
    type: "switch",
    name: "Switch",
    options: {
      variable: { id: null },
      hideLabel: false,
      value: false,
      width: null,
      height: null,
      labelWidth: 100,
      isLoading: false,
    },
  };
};

// Hàm tạo phần tử checkbox
export const createCheckboxElement = () => {
  return {
    id: "CheckBox" + uuidv4(),
    type: "checkbox",
    name: "CheckBox",
    options: {
      variable: { id: null },
      hideLabel: true,
      value: [],
      options: [],
      width: null,
      height: null,
      labelWidth: 100,
    },
  };
};

// Hàm tạo phần tử radio
export const createRadioElement = () => {
  return {
    id: "Radio" + uuidv4(),
    type: "radio",
    name: "Radio",
    options: {
      variable: { id: null },
      hideLabel: true,
      value: "",
      options: [{ label: "label", value: "value", isCheck: false }],
      width: null,
      height: null,
      labelWidth: 100,
    },
  };
};

// Hàm tạo phần tử textarea
export const createTextareaElement = () => {
  return {
    id: "TextArea" + uuidv4(),
    type: "textarea",
    name: "TextArea",
    options: {
      variable: { id: null },
      hideLabel: true,
      value: "",
      placeholder: "",
      width: null,
      height: null,
      labelWidth: 100,
      maxLength: null,
      minLength: null,
      disabled: false,
      showCount: false,
    },
  };
};

// Hàm tạo phần tử number
export const createNumberElement = () => {
  return {
    id: "InputNumber" + uuidv4(),
    type: "number",
    name: "Input Number",
    options: {
      variable: { id: null },
      hideLabel: true,
      title: "Title",
      value: 0,
      width: null,
      height: null,
      labelWidth: 100,
      bordered: true,
      clearable: true,
      min: 0,
      max: 100,
      placeholder: "Enter Number",
      readonly: false,
      showButton: true,
      step: 1,
    },
  };
};

// Hàm tạo phần tử text
export const createTextElement = () => {
  return {
    id: "Text" + uuidv4(),
    type: "text",
    name: "Text",
    options: {
      variable: { id: null },
      hideLabel: true,
      color: "",
      value: "text",
      strong: false,
      italic: false,
      underline: false,
      delete: false,
      depth: "",
      type: "default",
      width: null,
      height: null,
      labelWidth: 100,
    },
  };
};
