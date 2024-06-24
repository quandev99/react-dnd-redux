import { Form, Select } from "antd";

const SelectElement = ( { id, name, type, options } ) => {
  // console.log("options?.value", options?.value);
  return (
    <Form.Item label={!options?.hideLabel ? name : ""}>
      <Select
        mode={options?.isMultiple ? "multiple" : "tags"}
        allowClear
        placeholder={options?.placeholder || "Please select"}
        options={options?.options}
        defaultValue={options?.value || null}
      ></Select>
    </Form.Item>
  );
};

export default SelectElement;
