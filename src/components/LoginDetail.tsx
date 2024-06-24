import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Button } from "antd";
import ExportJsonElement from "./ExportJsonElement";
import ImportJsonElement from "./ImportJsonElement";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { deleteAllElements, getElementById, getElements, getLoginById, saveElement } from "../slices/element";
import { ListDataElement } from "../data/element";
import DropArea from "./DropArea";
import SidebarItem from "./SidebarItem";
import ElementAttribute from "./ElementAttribute";
import PreviewModal from "./PreviewModal";

const LoginDetail = () => {
  let { id } = useParams();
  const [previewOpen, setPreviewOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state: any) => state.app);
  const { logins, selectedElement, login } = useAppSelector(
    (state: any) => state.logins
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
  useEffect(() => {
    dispatch(getElements());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getLoginById(id));
  }, [dispatch,id]);
  return (
      <div className="app">
      <DndProvider backend={HTML5Backend}>
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
            <Button onClick={() => dispatch(deleteAllElements())}>Clear</Button>
            <ExportJsonElement />
            <ImportJsonElement />
          </div>
        </div>
        <div className="content">
          <DropArea login={login} />
        </div>
        {isOpen && selectedElement && <ElementAttribute />}
      <PreviewModal
        isOpen={previewOpen}
        setPreviewOpen={() => setPreviewOpen(!previewOpen)}
        login={login}
      />
      </DndProvider>
      </div>
  );
};

export default LoginDetail;
