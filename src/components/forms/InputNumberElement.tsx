import { Form,  InputNumber } from "antd";
const InputNumberElement = ({ id, name, type, options }) => {
  return (
    <Form.Item
      label={!options?.hideLabel ? name : null}
    >
      <InputNumber
        style={{ width: "100%"}}
        placeholder={options?.placeholder || ""}
        value={options?.value || 0}
      />
    </Form.Item>
  );
};

export default InputNumberElement;
