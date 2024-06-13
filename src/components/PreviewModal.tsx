

import React from "react";
import { Button, Modal } from "antd";
import ElementMap from "./forms";
import iconPreview from "../assets/pluginIcon.svg"

const PreviewModal: React.FC = ({ isOpen, setPreviewOpen, elements }) => {
  return (
    <Modal
      title={
        <div className="flex items-center h-10 gap-x-4">
          <div className="h-full w-[40px] bg-blue-100 p-2 rounded">
            <img src={iconPreview} className="h-full w-full" alt="" />
          </div>
          <p className="text-2xl font-medium">Preview</p>
        </div>
      }
      footer={
        <>
          <Button type="text" onClick={() => setPreviewOpen(false)}>
            Hủy
          </Button>
          <Button type="primary">Save and run</Button>
        </>
      }
      open={isOpen}
      onCancel={() => setPreviewOpen(false)}
      centered
      width={900}
    >
      <div className="mx-[200px]">
        {elements.map((element, index) => {
          const ElementComponent = ElementMap[element?.type];
          return ElementComponent ? (
            <div key={index} className="form-element">
              <ElementComponent {...element} />
            </div>
          ) : null;
        })}
      </div>
      <hr />
    </Modal>
  );
};

export default PreviewModal;
