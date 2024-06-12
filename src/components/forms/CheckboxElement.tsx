import { Checkbox, Form} from "antd";

const CheckboxElement = ({ id, name, type, options }) => {
  return (
    <Form.Item label={!options?.hideLabel ? name : null}>
      <Checkbox.Group options={options?.options} value={options?.value}>
      </Checkbox.Group>
    </Form.Item>
  );
};

export default CheckboxElement;
