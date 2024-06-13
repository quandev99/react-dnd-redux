import { Form, Input } from "antd";
const InputElement = ({ id, name, type, options }) => {
  return (
    <div className="flex items-center">
      {!options?.hideLabel && (
        <div
          className="flex justify-between items-center"
          style={{
            minWidth: `${
              options?.labelWidth ? `${options?.labelWidth}px` : "100px"
            } `,
          }}
        >
          <p className="break-words">{`${!options?.hideLabel ? name : null}`}</p>
          <p className="mx-2">{":"}</p>
        </div>
      )}
        <Input
          placeholder={options?.placeholder || ""}
          value={options?.value || ""}
          count={{
            show: options?.showCount || false,
            max: options?.maxLength || 0,
          }}
        />
    </div>
  );
};

export default InputElement;
