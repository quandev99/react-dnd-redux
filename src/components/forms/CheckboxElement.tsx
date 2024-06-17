import { Checkbox, Form} from "antd";

const CheckboxElement = ({ id, name, type, options }) => {
  return (
    <Form.Item label={!options?.hideLabel ? name : null}>
      <Checkbox.Group value={options?.value}>
        {options?.options?.map((option, index) => (
          <Checkbox key={index} value={option?.value}>
            {option.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </Form.Item>
  );
};

export default CheckboxElement;
