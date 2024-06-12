import React from "react";
import { useDrag } from "react-dnd";

const SidebarItem = ({ element}) => {
  const [{ isDragging }, drag] = useDrag({
    type: "FORM_ELEMENT",
    item: { type: "NEW_ELEMENT", element },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
 
    return (
      <div
        ref={drag}
        className={`draggable-element ${isDragging ? "dragging" : ""}`}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {element.label}
      </div>
    );
};

export default SidebarItem;
