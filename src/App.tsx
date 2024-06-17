import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropArea from "./components/DropArea";
import PreviewModal from "./components/PreviewModal";
import SidebarItem from "./components/SidebarItem";
import ElementAttribute from "./components/ElementAttribute";
import { ListDataElement } from "./data/element";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { getElements, saveElement, setElements } from "./slices/element";
import { Button } from "antd";
import ExportJsonElement from "./components/ExportJsonElement";
import ImportJsonElement from "./components/ImportJsonElement";
const App = () => {
const dispatch = useAppDispatch()
const {isOpen} = useAppSelector((state: any) => state.app);
const { elements, selectedElement } = useAppSelector(
  (state: any) => state.elements
);
const data = {
  variables: [
    {
      id: "BakCT",
      name: "user",
      label: "",
      value: "nguyenvietquan",
      secret: false,
    },
    {
      id: "6JHgY",
      name: "pass",
      label: "",
      value: "13211231231",
      secret: false,
    },
    {
      id: "lEEPf",
      name: "login",
      label: "",
      value: "login",
      secret: false,
    },
  ],
  input: [
    {
      id: "Input1717466327475",
      type: "input",
      name: "Email",
      options: {
        variable: {
          id: "BakCT",
          name: "user",
          label: "",
          value: "nguyenvietquan",
          secret: false,
        },
        hideLabel: false,
        value: "abcd",
        placeholder: "Please enter",
        width: null,
        height: null,
        labelWidth: 100,
        maxLength: null,
        minLength: null,
        disabled: false,
        showCount: false,
        label: "user",
      },
    },
    {
      id: "Select1717468168432",
      type: "select",
      name: "Select",
      options: {
        variable: { id: null },
        hideLabel: false,
        value: [],
        options: [
          { label: "Javascript", value: "Js", isCheck: false },
          { label: "ReactJs", value: "React", isCheck: false },
        ],
        isMultiple: true,
        placeholder: "Please select",
        width: null,
        height: null,
        labelWidth: 100,
      },
    },
    {
      id: "CheckBox1717467990425",
      type: "checkbox",
      name: "CheckBox",
      options: {
        variable: { id: null },
        hideLabel: false,
        value: [],
        options: [{ label: "label", value: "value", isCheck: false }],
        width: null,
        height: null,
        labelWidth: 100,
      },
    },
    {
      id: "TextArea1717468026191",
      type: "textarea",
      name: "TextArea",
      options: {
        variable: { id: null },
        hideLabel: false,
        value: "",
        placeholder: "",
        width: null,
        height: null,
        labelWidth: 100,
        maxLength: null,
        minLength: null,
        disabled: false,
        showCount: false,
      },
    },
    {
      id: "Switch1717467991944",
      type: "switch",
      name: "Switch",
      options: {
        variable: { id: null },
        hideLabel: true,
        value: true,
        width: null,
        height: null,
        labelWidth: 100,
        isLoading: false,
      },
    },
  ],
};
useEffect(()=>{
  dispatch(getElements());
},[dispatch])

  // const initialData = 
  // [
  //   {
  //     id: "Input1717466327475",
  //     type: "input",
  //     name: "Email",
  //     options: {
  //       variable: {
  //         id: "BakCT",
  //         name: "user",
  //         label: "",
  //         value: "nguyenvietquan",
  //         secret: false,
  //       },
  //       hideLabel: false,
  //       value: "abcd",
  //       placeholder: "Please enter",
  //       width: null,
  //       height: null,
  //       labelWidth: 100,
  //       maxLength: null,
  //       minLength: null,
  //       disabled: false,
  //       showCount: false,
  //       label: "user",
  //     },
  //   },
  //   {
  //     id: "Select1717468168432",
  //     type: "select",
  //     name: "Select",
  //     options: {
  //       variable: { id: null },
  //       hideLabel: false,
  //       value: [],
  //       options: [
  //         { label: "Javascript", value: "Js", isCheck: false },
  //         { label: "ReactJs", value: "React", isCheck: false },
  //       ],
  //       isMultiple: true,
  //       placeholder: "Please select",
  //       width: null,
  //       height: null,
  //       labelWidth: 100,
  //     },
  //   },
  //   {
  //     id: "CheckBox1717467990425",
  //     type: "checkbox",
  //     name: "CheckBox",
  //     options: {
  //       variable: { id: null },
  //       hideLabel: false,
  //       value: [],
  //       options: [{ label: "label", value: "value", isCheck: false }],
  //       width: null,
  //       height: null,
  //       labelWidth: 100,
  //     },
  //   },
  //   {
  //     id: "TextArea1717468026191",
  //     type: "textarea",
  //     name: "TextArea",
  //     options: {
  //       variable: { id: null },
  //       hideLabel: false,
  //       value: "",
  //       placeholder: "",
  //       width: null,
  //       height: null,
  //       labelWidth: 100,
  //       maxLength: null,
  //       minLength: null,
  //       disabled: false,
  //       showCount: false,
  //     },
  //   },
  //   {
  //     id: "Switch1717467991944",
  //     type: "switch",
  //     name: "Switch",
  //     options: {
  //       variable: { id: null },
  //       hideLabel: true,
  //       value: true,
  //       width: null,
  //       height: null,
  //       labelWidth: 100,
  //       isLoading: false,
  //     },
  //   },
  // ];
  // useEffect(() => {
  //   localStorage.setItem("Elements", JSON.stringify(initialData));
  // }, [initialData]);
 
  const [previewOpen, setPreviewOpen] = useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div className="sidebar">
          {ListDataElement.elements.map((element) => (
            <SidebarItem key={element.id} element={element} />
          ))}
          <div className="flex flex-wrap gap-2">
            <Button type="primary" onClick={() => setPreviewOpen(true)}>
              Preview
            </Button>
            <Button type="primary" onClick={() => dispatch(saveElement())}>
              Save
            </Button>
            <ExportJsonElement />
            <ImportJsonElement />
          </div>
        </div>
        <div className="content">
          <DropArea elements={elements} />
        </div>
        {isOpen && selectedElement && (
          <ElementAttribute variables={data.variables} />
        )}
      </div>
      <PreviewModal
        isOpen={previewOpen}
        setPreviewOpen={() => setPreviewOpen(!previewOpen)}
        elements={elements}
      />
    </DndProvider>
  );
};

export default App;
