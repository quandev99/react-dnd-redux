import { Form, Select } from "antd";

const SelectElement = ( { id, name, type, options } ) => {
  return (
    <Form.Item label={!options?.hideLabel ? name : ""}>
      <Select
        mode={options?.isMultiple ? "multiple" : 'tags'}
        allowClear
        placeholder={
          options?.isMultiple ? options?.placeholder : "Please select"
        }
        options={options?.options}
      ></Select>
    </Form.Item>
  );
};

export default SelectElement;
