import { Checkbox, Form} from "antd";

const CheckboxElement = ({ id, name, type, options }) => {
  console.log("option", options);
  return (
    <Form.Item label={!options?.hideLabel ? name : null}>
      <Checkbox.Group options={options?.options} defaultValue={options.value}>
      </Checkbox.Group>
    </Form.Item>
  );
};

export default CheckboxElement;
