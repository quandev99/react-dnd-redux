import React from "react";
import Modal from "react-modal";

function PreviewModal({ isOpen, onRequestClose, formElements }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="bg-slate-400">
        <h2>Preview</h2>
        <form>
          {formElements.map((element, index) => (
            <div key={index}>
              <label>{element?.label}</label>
              {element?.type === "input" && <input type="text" />}
              {element?.type === "select" && (
                <select>
                  <option>Select...</option>
                </select>
              )}
              {element?.type === "checkbox" && <input type="checkbox" />}
              {element?.type === "textarea" && <textarea />}
            </div>
          ))}
        </form>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
}

export default PreviewModal;
