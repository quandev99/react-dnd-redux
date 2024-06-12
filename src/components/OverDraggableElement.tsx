import React from 'react'

const OverDraggableElement = ({ isOver, dropRef }) => {
  return (
    <div>
      {isOver && (
        <div
          className="form-element preview-element"
          style={{
            position: "absolute",
            top: dropRef.current?.children[0]?.getBoundingClientRect().top + 20,
            width: dropRef.current?.children[0]?.offsetWidth,
          }}
        >
         Input
        </div>
      )}
    </div>
  );
};

export default OverDraggableElement