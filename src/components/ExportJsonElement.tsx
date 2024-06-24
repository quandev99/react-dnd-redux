import { Button } from "antd";
import FileSaver from "file-saver";
import { useAppSelector } from "../app/hook";

const ExportJsonElement = () => {
  const {logins} = useAppSelector((state: any) => state.logins);

  const handleExport = () => {
    const json = JSON.stringify(logins, null, 2); // Convert state to JSON string
    const blob = new Blob([json], { type: "application/json" });
    FileSaver.saveAs(blob, "login.json");
  };

  return (
    <Button type="primary" onClick={handleExport}>
      Export JSON
    </Button>
  );
};

export default ExportJsonElement;
