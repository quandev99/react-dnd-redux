import { Form, Input } from "antd";
const InputElement = ({ id, name, type, options }) => {
  return (
    <Form.Item label={!options?.hideLabel ? name : null}>
      <Input
        placeholder={options?.placeholder || ""}
        value={options?.value || ""}
        count={{
          show: options?.showCount || false,
          max: options?.maxLength || 0,
        }}
      />
    </Form.Item>
  );
};

export default InputElement;
