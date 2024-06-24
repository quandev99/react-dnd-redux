import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logins: [],
  login: {},
  selectedElement: {},
  isLoading: false,
  error: "",
} as { logins: unknown[]; login: unknown; selectedElement: unknown; isLoading: boolean; error: string };
const findElementById = (logins, id) => {
  for (const login of logins) {
    const element = login.elements.find(element => element.id === id);
    if (element) {
      return element;
    }
  }
  return null;
};
const saveToLocalStorage = (logins) => {
  localStorage.setItem("Logins", JSON.stringify(logins));
};

const elementSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getElements: (state) => {
      const localStorageData = JSON.parse(localStorage.getItem("Logins") as string);
      if (localStorageData && Array.isArray(localStorageData)) {
        state.isLoading = false;
        state.logins = localStorageData;
      } else {
        state.logins = [];
        state.isLoading = true;
      }
      state.logins;
    },
    getLoginById: (state, action) => {
      const id = action.payload;
      state.login = state.logins.find((login) => login.id === id);
    },
    getElementById: (state, action) => {
      const id = action.payload;
      const element = findElementById(state.logins, id);
      if (element) {
        state.selectedElement = element;
      } else {
        state.selectedElement = {};
      }
    },
    addElementToLogin: (state, action) => {
      const { newElement, position } = action.payload;
      state.login.elements.splice(position, 0, newElement);
      // Optionally update the logins array if needed
      const loginIndex = state.logins.findIndex((login) => login?.id === state.login?.id);
      console.log("loginIndex", loginIndex);
      if (loginIndex !== -1) {
        state.logins[loginIndex] = state.login;
      }
    },
    moveElementSlice: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const updatedElements = [...state.login.elements];
      const [movedElement] = updatedElements.splice(dragIndex, 1);
      updatedElements.splice(hoverIndex, 0, movedElement);
      state.login.elements = updatedElements;
      // Optionally update the logins array if needed
      const loginIndex = state.logins.findIndex((login) => login.id === state.login.id);
      if (loginIndex !== -1) {
        state.logins[loginIndex] = state.login;
        saveToLocalStorage(state.logins);
      }
    },
    deleteElement: (state, action) => {
      const id = action.payload;
      const newElements = state.login.elements.filter((item) => item.id !== id);
      state.login.elements = newElements;
      // Optionally update the logins array if needed
      const loginIndex = state.logins.findIndex((login) => login.id === state.login.id);
      if (loginIndex !== -1) {
        state.logins[loginIndex] = state.login;
        // saveToLocalStorage(state.logins);
      }
    },
    copyElement: (state, action) => {
      const { newElement, index } = action.payload;
      const elements = [...state.login.elements];
      if (newElement) {
        elements.splice(index + 1, 0, newElement);
        state.login.elements = elements;
        // Optionally update the logins array if needed
        const loginIndex = state.logins.findIndex((login) => login.id === state.login.id);
        if (loginIndex !== -1) {
          state.logins[loginIndex] = state.login;
        }
      }
    },
    setElements: (state, action) => {
      state.login.elements = action.payload;
      // Optionally update the logins array if needed
      const loginIndex = state.logins.findIndex((login) => login.id === state.login.id);
      if (loginIndex !== -1) {
        state.logins[loginIndex] = state.login;
      }
    },
    updateElement: (state, action) => {
      const { id, updatedAttributes } = action.payload;
      const index = state.login.elements.findIndex((element) => element.id === id);
      
      if (index !== -1) {
        state.login.elements[index] = {
          ...state.login.elements[index],
          ...updatedAttributes,
        };
        // Optionally update the logins array if needed
        const loginIndex = state.logins.findIndex((login) => login.id === state.login.id);
        if (loginIndex !== -1) {
          state.logins[loginIndex] = state.login;
          const element = findElementById(state.logins, id);
          if (element) {
            state.selectedElement = element;
          } else {
            state.selectedElement = {};
          }
          // saveToLocalStorage(state.logins);
        }
      }
    },
    saveElement: (state) => {
      saveToLocalStorage(state.logins);
    },
    importElements(state, action) {
      const { logins } = action.payload
      state.logins = logins || null; 
      saveToLocalStorage(logins);
    },
    deleteAllElements(state) {
      state.login = {};
      // saveToLocalStorage([]);
    }
  },
});

export const { getElements, addElementToLogin, moveElementSlice, deleteElement, copyElement, setElements, getElementById, updateElement, saveElement, importElements, deleteAllElements, getLoginById } = elementSlice.actions;
export const elementReducer = elementSlice.reducer;

