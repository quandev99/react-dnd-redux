import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

const TextareaElement = ({ id, name, type, options }) => {
  return (
    <Form.Item label={!options?.hideLabel ? name : ""}>
      <TextArea
        rows={3}
        placeholder={options?.placeholder || ""}
        count={{
          show: options?.showCount || false,
          max: options?.maxLength || 0,
        }}
        value={options?.value}
      />
    </Form.Item>
  );
};

export default TextareaElement;
