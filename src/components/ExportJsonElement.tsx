import { Button } from "antd";
import FileSaver from "file-saver";
import { useAppSelector } from "../app/hook";

const ExportJsonElement = () => {
  const {elements} = useAppSelector((state: any) => state.elements);

  const handleExport = () => {
    const json = JSON.stringify(elements, null, 2); // Convert state to JSON string
    const blob = new Blob([json], { type: "application/json" });
    FileSaver.saveAs(blob, "elements.json");
  };

  return (
    <Button type="primary" onClick={handleExport}>
      Export JSON
    </Button>
  );
};

export default ExportJsonElement;
