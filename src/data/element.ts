import { v4 as uuidv4 } from "uuid";

export const ListDataElement = {
  elements:[
    { id: uuidv4(), type: "input", label: "Input", icon: "" },
    { id: uuidv4(), type: "select", label: "Select", icon: "" },
    { id: uuidv4(), type: "checkbox", label: "Checkbox", icon: "" },
    { id: uuidv4(), type: "textarea", label: "Textarea", icon: "" },
    { id: uuidv4(), type: "switch", label: "Switch", icon: "" },
    { id: uuidv4(), type: "number", label: "InputNumber", icon: "" },
]
}