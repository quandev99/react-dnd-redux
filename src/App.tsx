import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useAppDispatch } from "./app/hook";
import { getElements } from "./slices/element";

import AdminLayout from "./layouts/AdminLoayout";
import ListLogins from "./components/ListLogins";
import LoginDetail from "./components/LoginDetail";
const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getElements());
  }, [dispatch]);
  // const initialData = [
  //   {
  //     id: "a235t1ZSwRoPOWzZsTxaO",
  //     userId: 89475,
  //     name: "Login",
  //     description: "abc",
  //     version: "1.0.0",
  //     script: {
  //       id: "a235t1ZSwRoPOWzZsTxaO",
  //       variables: [
  //         {
  //           id: "BakCT",
  //           name: "user",
  //           label: "",
  //           value: "nguyenvietquan",
  //           secret: false,
  //         },
  //         {
  //           id: "6JHgY",
  //           name: "pass",
  //           label: "",
  //           value: "13211231231",
  //           secret: false,
  //         },
  //         {
  //           id: "lEEPf",
  //           name: "login",
  //           label: "",
  //           value: "login",
  //           secret: false,
  //         },
  //       ],
  //     },
  //     elements: [
  //       {
  //         id: "Switch1718188247831",
  //         type: "switch",
  //         name: "Switch",
  //         options: {
  //           hideLabel: true,
  //           value: true,
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           isLoading: false,
  //         },
  //       },
  //       {
  //         id: "Input1718076608542",
  //         type: "input",
  //         name: "Input",
  //         options: {
  //           variable: {
  //             id: "BakCT",
  //             name: "user",
  //             label: "",
  //             value: "nguyenvietquan",
  //             secret: false,
  //           },
  //           hideLabel: false,
  //           value: "nguyenvietquan",
  //           placeholder: "Enter User Name",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //           label: "user",
  //         },
  //       },
  //       {
  //         id: "Input1718077263926",
  //         type: "input",
  //         name: "PassWord",
  //         options: {
  //           hideLabel: false,
  //           value: "123456",
  //           placeholder: "Enter pass ",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //           variable: { id: null },
  //         },
  //       },
  //       {
  //         id: "Select1718076611308",
  //         type: "select",
  //         name: "Learn",
  //         options: {
  //           hideLabel: false,
  //           value: ["ReactJs"],
  //           options: [
  //             { label: "React", value: "ReactJs", isCheck: true },
  //             { label: "Angular", value: "Angularjs", isCheck: true },
  //           ],
  //           isMultiple: true,
  //           placeholder: "Please select",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           variable: { id: null },
  //         },
  //       },
  //       {
  //         id: "Input1718181953677",
  //         type: "input",
  //         name: "Input",
  //         options: {
  //           hideLabel: false,
  //           value: "asdasdsad asdadasdasdasdasda adsasda asdasda asdasdas",
  //           placeholder: "",
  //           width: null,
  //           height: 300,
  //           labelWidth: 119,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: "HwkddgNUGRh62wwrslZ4F",
  //     userId: 89475,
  //     name: "Login2",
  //     description: "",
  //     version: "1.0.0",
  //     script: {
  //       id: "HwkddgNUGRh62wwrslZ4F",
  //       variables: [
  //         {
  //           id: "BakCT",
  //           name: "user",
  //           label: "",
  //           value: "nguyenvietquan",
  //           secret: false,
  //         },
  //         {
  //           id: "6JHgY",
  //           name: "pass",
  //           label: "",
  //           value: "13211231231",
  //           secret: false,
  //         },
  //         {
  //           id: "lEEPf",
  //           name: "login",
  //           label: "",
  //           value: "login",
  //           secret: false,
  //         },
  //       ],
  //     },
  //     elements: [
  //       {
  //         id: "Alert1717472120144",
  //         type: "alert",
  //         name: "Alert",
  //         options: {
  //           hideLabel: true,
  //           title: "Title",
  //           type: "info",
  //           value: "",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           bordered: false,
  //         },
  //       },
  //       {
  //         id: "Input1717466327475",
  //         type: "input",
  //         name: "Email",
  //         options: {
  //           variable: {
  //             id: "BakCT",
  //             name: "user",
  //             label: "",
  //             value: "nguyenvietquan",
  //             secret: false,
  //           },
  //           hideLabel: false,
  //           value: "nguyenvietquan",
  //           placeholder: "",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //           label: "user",
  //         },
  //       },
  //       {
  //         id: "Select1717468168432",
  //         type: "select",
  //         name: "Select",
  //         options: {
  //           hideLabel: false,
  //           value: ["React"],
  //           options: [
  //             { label: "Javascript", value: "Js", isCheck: false },
  //             { label: "ReactJs", value: "React", isCheck: true },
  //           ],
  //           isMultiple: true,
  //           placeholder: "Please select",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //         },
  //       },
  //       {
  //         id: "CheckBox1717467990425",
  //         type: "checkbox",
  //         name: "CheckBox",
  //         options: {
  //           hideLabel: false,
  //           value: ["value"],
  //           options: [{ label: "label", value: "value", isCheck: true }],
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //         },
  //       },
  //       {
  //         id: "TextArea1717468026191",
  //         type: "textarea",
  //         name: "TextArea",
  //         options: {
  //           hideLabel: false,
  //           value: "",
  //           placeholder: "",
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           maxLength: null,
  //           minLength: null,
  //           disabled: false,
  //           showCount: false,
  //         },
  //       },
  //       {
  //         id: "Switch1717467991944",
  //         type: "switch",
  //         name: "Switch",
  //         options: {
  //           hideLabel: true,
  //           value: true,
  //           width: null,
  //           height: null,
  //           labelWidth: 100,
  //           isLoading: false,
  //         },
  //       },
  //     ],
  //   },
  // ];
  // useEffect(() => {
  //   localStorage.setItem("Logins", JSON.stringify(initialData));
  // }, [initialData]);
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="logins">
            <Route index element={<ListLogins />} />
            <Route path=":id" element={<LoginDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
