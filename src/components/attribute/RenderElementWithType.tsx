import { Input, Space, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import DynamicFormItem from "../forms/DynamicFormItem";
export default function RenderElement({ attribute, onChange }) {
  const elementType = attribute?.type;
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onChange(name, type === "checkbox" ? checked : value);
  };
const handleOptionsChange = (options) => {
  console.log("options", options);
  onChange("options.options", options);
};
  switch (elementType) {
    case "checkbox":
    case "select":
      return (
        <DynamicFormItem
          valueOptions={attribute}
          onOptionsChange={handleOptionsChange}
        ></DynamicFormItem>
      );
    case "switch":
      return (
        <Space>
          <Switch
            checked={attribute?.options?.value}
            onChange={(checked) => onChange("value", checked)}
          />
        </Space>
      );
    case "input":
      return (
        <Input
          placeholder="input placeholder"
          value={attribute?.options?.value}
          name="value"
          onChange={handleChange}
        />
      );
    case "textarea":
      return (
        <TextArea
          rows={2}
          placeholder={"Please Input"}
          value={attribute?.options?.value}
          name="value"
          onChange={handleChange}
        />
      );
    default:
      return null;
  }
}
