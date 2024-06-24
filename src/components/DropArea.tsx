import React, { useRef, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import DraggableElement from "./DraggableElement";
import { Checkbox, Form } from "antd";
import createElementWithTpe from "../utils/createElementWithType";
import { useAppDispatch } from "../app/hook";
import { addElementToLogin, setElements } from "../slices/element";
const DropArea = ({ login }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const dispatch = useAppDispatch();
  const dropRef = useRef(null);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "FORM_ELEMENT",
    hover: (item, monitor) => {
      if (!dropRef.current) return;
      const hoverBoundingRect = dropRef.current?.getBoundingClientRect();
      const hoverClientY = monitor.getClientOffset().y - hoverBoundingRect.top;

      let newHoverIndex = login?.elements?.length;
      for (let i = 0; i < login?.elements?.length; i++) {
        const { top, bottom } =
          dropRef.current.children[i].getBoundingClientRect();
        if (hoverClientY < (top + bottom) / 2) {
          newHoverIndex = i;
          break;
        }
      }
      setHoverIndex(newHoverIndex);
    },
    drop: (item, monitor) => {
      if (item.type === "NEW_ELEMENT") {
        const newElement = createElementWithTpe(item?.element);
        dispatch(
          addElementToLogin({
            newElement,
            position: hoverIndex,
          })
        );
      }
      setHoverIndex(null);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  drop(dropRef);

  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <div>    
      {/* <Checkbox
        // className="hidden"
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Show Form
      </Checkbox> */}
      <Form
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <div
          ref={dropRef}
          className={`drop-area ${isOver ? "dragging-over" : ""}`}
        >
          {login?.elements?.map((element, index) => (
            <DraggableElement key={index} index={index} element={element} />
          ))}
          {isOver && hoverIndex !== null && (
            <div className="preview-element" style={{ order: hoverIndex }}>
              <div className="placeholder">Drop here</div>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
};

export default DropArea;
