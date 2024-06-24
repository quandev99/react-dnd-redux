import { Input, InputNumber, Select, Space, Switch, Typography } from "antd";
import { updateElement } from "../slices/element";
import { useAppSelector, useAppDispatch } from "../app/hook";
import RenderElement from "./attribute/RenderElementWithType";
const { Option } = Select;

const ElementAttribute = () => {
  const dispatch = useAppDispatch();
  const { login, selectedElement } = useAppSelector(
    (state) => state.logins
  );
  console.log("login", login);
  console.log("selectedElement", selectedElement);
  const variables = login?.script?.variables || [];
 const handleAttributeChange = (key, value) => {
   const updatedOptions = { ...selectedElement.options };
   const updatedAttributes = { ...selectedElement };
  if (key === "name") {
    console.log("name", value);
    updatedAttributes.name = value;
  } else if (key === "isMultiple") {
    console.log("isMultiple", value);
    updatedOptions.isMultiple = value;
    updatedOptions.value = "";
  } else if (key === "options.variable") {
    const selectedVariable = variables.find(
      (variable) => variable.id === value
    );
    const exitVariable = login?.elements?.find(
      (item) => item?.options?.variable?.id === value
    );
    if (selectedVariable && !exitVariable) {
      updatedOptions.variable = selectedVariable;
    } else {
      alert("Variable is already used");
    }
  } else {
    const keys = key.split(".");
    if (keys.length === 2) {
      if (Array.isArray(updatedOptions[keys[0]])) {
        const getCheckedLabels = (items) => {
          return items.filter((item) => item.isCheck).map((item) => item.value);
        };
        updatedOptions[keys[0]] = [...value];
        updatedOptions.value = getCheckedLabels(value) || null;
      } else {
        updatedOptions[keys[0]] = {
          ...updatedOptions[keys[0]],
          [keys[1]]: value,
        };
      }
    } else {
      updatedOptions[keys[0]] = value;
    }
  }
  updatedAttributes.options = updatedOptions;
   dispatch(updateElement({ id: selectedElement.id, updatedAttributes }));
 };
  return (
    <div className="element-attribute bg-[#eee] p-4 overflow-y-hidden">
      <div className="element-attribute-scroll">
        <h2 className="text-blue-500 font-medium text-xl mb-5">
          Component Attribute
        </h2>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Variable</Typography.Title>
          <Select
            className="block"
            placeholder="Please Select"
            value={selectedElement?.options?.variable?.id}
            allowClear
            onChange={(value) =>
              handleAttributeChange("options.variable", value)
            }
          >
            {variables?.map((item) => (
              <Option key={item?.id} value={item?.id}>
                {item?.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Default Value</Typography.Title>
          <RenderElement
            attribute={selectedElement}
            onChange={handleAttributeChange}
          />
        </div>
        <div className=" mb-5">
          <Typography.Title level={5}>Type</Typography.Title>
          <span className="bg-blue-200 text-blue-500 text-wrap text-center p-2 inline-block rounded-md shadow-md">
            {selectedElement?.type}
          </span>
        </div>
        {selectedElement?.type === "input" ||
        selectedElement?.type === "textarea" ? (
          <div className="w-[100%] mb-5">
            <div className="w-[100%] mb-5">
              <Space>
                <Switch
                  checked={selectedElement?.options?.showCount}
                  onChange={(checked) =>
                    handleAttributeChange("showCount", checked)
                  }
                />
                <p>Show Text Count</p>
              </Space>
            </div>
          </div>
        ) : null}
        {selectedElement?.type === "select" ? (
          <div className="w-[100%] mb-5">
            <Space>
              <Switch
                checked={selectedElement?.options?.isMultiple}
                onChange={(checked) =>
                  handleAttributeChange("isMultiple", checked)
                }
              />
              <p>Is Multiple</p>
            </Space>
          </div>
        ) : null}
        {selectedElement?.type === "switch" ? (
          <div className="w-[100%] mb-5">
            <Space>
              <Switch
                checked={selectedElement?.options?.isLoading}
                onChange={(checked) =>
                  handleAttributeChange("isLoading", checked)
                }
              />
              <p>Loading</p>
            </Space>
          </div>
        ) : null}
        <div className="w-[100%] mb-5">
          <Space>
            <Switch
              checked={selectedElement?.options?.hideLabel}
              onChange={(checked) => {
                handleAttributeChange("hideLabel", checked);
              }}
            />
            <p>Hide Label</p>
          </Space>
        </div>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Name</Typography.Title>
          <Input
            placeholder="Please Input"
            value={selectedElement?.name}
            onChange={(e) => handleAttributeChange("name", e.target.value)}
          />
        </div>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Placeholder</Typography.Title>
          <Input
            placeholder="Please Input"
            value={selectedElement?.options?.placeholder}
            onChange={(e) =>
              handleAttributeChange("placeholder", e.target.value)
            }
          />
        </div>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Label Width</Typography.Title>
          <InputNumber
            style={{ width: "60%" }}
            min={0}
            max={100000}
            value={selectedElement?.options?.labelWidth || 0}
            onChange={(value) => handleAttributeChange("labelWidth", value)}
          />
        </div>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Width</Typography.Title>
          <InputNumber
            style={{ width: "60%" }}
            min={0}
            max={100000}
            value={selectedElement?.options?.width}
            onChange={(value) => handleAttributeChange("width", value)}
          />
        </div>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Height</Typography.Title>
          <InputNumber
            style={{ width: "60%" }}
            min={0}
            max={100000}
            value={selectedElement?.options?.height}
            onChange={(value) => handleAttributeChange("height", value)}
          />
        </div>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Max Length</Typography.Title>
          <Input
            style={{ width: "100%" }}
            value={selectedElement?.options?.maxLength}
            onChange={(e) => handleAttributeChange("maxLength", e.target.value)}
            allowClear
          />
        </div>
        <div className="w-[100%] mb-5">
          <Typography.Title level={5}>Min Length</Typography.Title>
          <Input
            style={{ width: "100%" }}
            value={selectedElement?.options?.minLength}
            onChange={(e) => handleAttributeChange("minLength", e.target.value)}
            allowClear
          />
        </div>
      </div>
    </div>
  );
};

export default ElementAttribute;
