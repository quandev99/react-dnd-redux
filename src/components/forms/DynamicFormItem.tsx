import React, { useCallback } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
const DynamicFormItem = ({ valueOptions, onOptionsChange }) => {
  const [form] = Form.useForm();
  const [optionCount, setOptionCount] = React.useState(0);

  React.useEffect(() => {
    form.setFieldsValue({ options: valueOptions });
    setOptionCount(valueOptions.length);
  }, [form, valueOptions]);

  const handleOptionsChange = (changedValues, allValues) => {
    onOptionsChange(allValues.options);
  };
  const handleCheckboxChange = useCallback(
    (index) => (e) => {
      const { checked } = e.target;
      const updatedOptions = valueOptions.map((option, i) => {
        if (i === index ) {
          // Create a copy of the option object and modify the isCheck property
          return { ...option, isCheck: checked };
        }
        return option;
      });
      onOptionsChange(updatedOptions);
    },
    [onOptionsChange, valueOptions]
  );



  return (
    <Form
      form={form}
      onValuesChange={handleOptionsChange}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      initialValues={{ options: valueOptions }}
    >
      <Form.List name="options">
        {(fields, { add, remove }) => (
          <>
            {fields?.map(({ key, name, ...restField }, index) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Checkbox
                  onChange={handleCheckboxChange(index)}
                  checked={valueOptions[index]?.isCheck || false}
                ></Checkbox>
                <Form.Item {...restField} name={[name, "label"]}>
                  <Input placeholder="Please Input" />
                </Form.Item>
                <Form.Item {...restField} name={[name, "value"]}>
                  <Input placeholder="Please Input" />
                </Form.Item>
                <div className="flex bg-gray-100 h-[30px]">
                  <MinusOutlined
                    className=" bg-gray-100 border-r px-2"
                    onClick={() => {
                      remove(name);
                      setOptionCount(optionCount - 1);
                    }}
                  />
                  <PlusOutlined
                    className=" bg-gray-100 px-2"
                    onClick={() => {
                      add({
                        label: "label",
                        value: "value",
                        isCheck: false,
                      });
                      setOptionCount(optionCount + 1);
                    }}
                  />
                </div>
              </Space>
            ))}
            {optionCount <= 0 && (
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add({
                      label: "label",
                      value: "value",
                      isCheck: false,
                    });
                    setOptionCount(optionCount + 1);
                  }}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Option
                </Button>
              </Form.Item>
            )}
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default DynamicFormItem;





// import React from "react";
// import {
//   MinusOutlined,
//   PlusOutlined,
// } from "@ant-design/icons";
// import {
//   Button,
//   Card,
//   Checkbox,
//   CheckboxProps,
//   Form,
//   Input,
//   Space,
//   Typography,
// } from "antd";

// const DynamicFormItem: React.FC = ({ valueOptions }) => {
//   const [form] = Form.useForm();
//   const onChange: CheckboxProps["onChange"] = (e) => {
//     console.log(`checked = ${e.target.checked}`);
//   };
//   const onFinish = (values: any) => {
//     console.log("Received values of form:", values);
//   };
//   const [optionCount, setOptionCount] = React.useState(0);
//   React.useEffect(() => {
//     const { options } = form.getFieldsValue();
//     form.setFieldsValue({ options: valueOptions });
//     if (options) {
//       setOptionCount(options.length);
//     }
//   }, [form, valueOptions]);
//   return (
//     <>
//       <Form
//         name="dynamic_form_nest_item"
//         onFinish={onFinish}
//         form={form}
//         style={{ maxWidth: 600 }}
//         autoComplete="off"
//         initialValues={{ options: valueOptions }}
//       >
//         <Form.List name="options">
//           {(fields, { add, remove }) => (
//             <>
//               {fields.map(({ key, name, ...restField }) => (
//                 <Space
//                   key={key}
//                   style={{ display: "flex", marginBottom: 8 }}
//                   align="baseline"
//                 >
//                   <Checkbox onChange={onChange}></Checkbox>
//                   <Form.Item {...restField} name={[name, "label"]}>
//                     <Input placeholder="Please Input" />
//                   </Form.Item>
//                   <Form.Item {...restField} name={[name, "value"]}>
//                     <Input placeholder="Please Input" />
//                   </Form.Item>
//                   <div className="flex bg-gray-100 h-[30px]">
//                     <MinusOutlined
//                       className=" bg-gray-100 border-r px-2"
//                       onClick={() => {
//                         remove(name);
//                         setOptionCount(optionCount - 1);
//                       }}
//                     />
//                     <PlusOutlined
//                       className=" bg-gray-100 px-2"
//                       onClick={() => {
//                         add({
//                           label: "Label",
//                           value: "Value",
//                           isCheck: false,
//                         });
//                         setOptionCount(optionCount + 1);
//                       }}
//                     ></PlusOutlined>
//                   </div>
//                 </Space>
//               ))}
//               {optionCount <= 0 && (
//                 <Form.Item>
//                   <Button
//                     type="dashed"
//                     onClick={() => {
//                       add({
//                         label: "Label",
//                         value: "Value",
//                         isCheck: false,
//                       });
//                       setOptionCount(optionCount + 1);
//                     }}
//                     block
//                     icon={<PlusOutlined />}
//                   >
//                     Add Option
//                   </Button>
//                 </Form.Item>
//               )}
//             </>
//           )}
//         </Form.List>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//         <Form.Item noStyle shouldUpdate>
//           {() => (
//             <Typography>
//               <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
//             </Typography>
//           )}
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

// export default DynamicFormItem;


{
  /* <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        form={form}
        name="dynamic_form_complex"
        style={{ maxWidth: 600 }}
        autoComplete="off"
        initialValues={{ items: [{}] }}
      >
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div
              style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
            >
              {fields.map((field) => (
                <Card
                  size="small"
                  title={`Item ${field.name + 1}`}
                  key={field.key}
                  extra={
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Form.Item label="Name" name={[field.name, "name"]}>
                    <Input />
                  </Form.Item>

                  <Form.Item>
                    <Form.List name={[field.name, "options"]}>
                      {(subFields, subOpt) => (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: 16,
                          }}
                        >
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Checkbox
                                checked={false}
                                onChange={onChange}
                              ></Checkbox>
                              <Form.Item
                                noStyle
                                name={[subField.name, "label"]}
                              >
                                <Input
                                  defaultValue={"Label"}
                                  placeholder="Please Input"
                                />
                              </Form.Item>
                              <Form.Item
                                noStyle
                                name={[subField.name, "value"]}
                              >
                                <Input
                                  defaultValue={"Value"}
                                  placeholder="Please Input"
                                />
                              </Form.Item>
                              <MinusOutlined
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                              <PlusOutlined
                                onClick={() => subOpt.add()}
                              ></PlusOutlined>
                            </Space>
                          ))}
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button type="dashed" onClick={() => add()} block>
                + Add Item
              </Button>
            </div>
          )}
        </Form.List>

        <Form.Item noStyle shouldUpdate>
          {() => (
            <Typography>
              <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
            </Typography>
          )}
        </Form.Item>
      </Form> */
}
 