import React from "react";
import { Button } from "antd";
import { useAppDispatch } from "../app/hook";
import { importElements } from "../slices/element";

const ImportJsonElement = () => {
  const dispatch = useAppDispatch();

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          console.log("file content", e.target.result);
          try {
            const jsonData = JSON.parse(e.target.result as string);
            dispatch(importElements({ elements: jsonData.elements }));
          } catch (error) {
            console.error("Invalid JSON file", error);
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        onChange={handleImport}
        style={{ display: "none" }}
        id="import-json-input"
      />
      <label htmlFor="import-json-input">
        <Button
          type="primary"
          onClick={() => document.getElementById("import-json-input")?.click()}
        >
          Import JSON
        </Button>
      </label>
    </div>
  );
};

export default ImportJsonElement;
