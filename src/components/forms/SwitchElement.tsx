import {  Form, Space, Switch } from "antd";

const SwitchElement = ({ id, name, type, options }) => {
  return (
    <Form.Item label={options?.hideLabel ? name : ""}>
      <Space direction="vertical">
        <Switch
          value={options?.value}
          loading={options?.isLoading}
        />
      </Space>
    </Form.Item>
  );
};

export default SwitchElement;
