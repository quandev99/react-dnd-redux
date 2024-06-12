import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../utils";
import { getAllElements } from "../api/element";

export const getElements = createAsyncThunk("element/getElements", async () => {
  try {
    pause(0);
    const { data } = await getAllElements();
    return data;
  } catch (error: any) {
    return error.message;
  }
});