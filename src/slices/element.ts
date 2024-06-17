import { createSlice } from "@reduxjs/toolkit";
// import { getElements } from "../actions/element";

const initialState = {
  elements: [],
  selectedElement: {},
  isLoading: false,
  error: "",
} as { elements: unknown[]; selectedElement: object; isLoading: boolean; error: string };

const saveToLocalStorage = (elements) => {
  localStorage.setItem("Elements", JSON.stringify(elements));
};

const elementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    getElements: (state) => {
      const localStorageData = JSON.parse(localStorage.getItem("Elements") as string);
      if (localStorageData && Array.isArray(localStorageData)) {
        state.isLoading = false;
        state.elements = localStorageData;
      } else {
        state.elements = [];
        state.isLoading = true;
      }
      state.elements;
    },
    getElementById: (state, action) => {
      const id = action.payload;
      state.selectedElement = state.elements.find((element) => element.id === id);
    },
    addElement: (state, action) => {
      const newElements = [...state.elements, action.payload];
      // saveToLocalStorage(newElements);
      return {
        ...state,
        elements: newElements,
      };
    },
    moveElementSlice: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const updatedElements = [...state.elements];
      const [movedElement] = updatedElements.splice(dragIndex, 1);
      updatedElements.splice(hoverIndex, 0, movedElement);
      // saveToLocalStorage(updatedElements);
      state.elements = updatedElements;
    },
    deleteElement: (state, action) => {
      const id = action.payload;
      const newElements = state.elements.filter((item) => item.id !== id);
      // saveToLocalStorage(newElements);
      state.elements = newElements;
      return state;
    },
    copyElement: (state, action) => {
      const { newElement, index } = action.payload;
      const elements = [...state.elements];
      if (newElement) {
        elements.splice(index + 1, 0, newElement);
        // saveToLocalStorage(elements);
        return {
          ...state,
          elements,
        };
      }
      return state;
    },
    setElements: (state, action) => {
      state.elements = action.payload;
      // saveToLocalStorage(action.payload);
    },
    updateElement: (state, action) => {
      const { id, updatedAttributes } = action.payload;
      const index = state.elements.findIndex((element) => element.id === id);
      if (index !== -1) {
        state.elements[index] = {
          ...state.elements[index],
          ...updatedAttributes,
        };
        // Update selectedElement if it's the one being updated
        if (state.selectedElement.id === id) {
          state.selectedElement = {
            ...state.selectedElement,
            ...updatedAttributes,
          };
        }
      }
    },
    saveElement: (state) => {
      saveToLocalStorage(state.elements);
    },
    importElements(state, action) {
      const { elements } = action.payload
      state.elements = elements; 
      saveToLocalStorage(elements);
    }
  },
});

export const { getElements, addElement, moveElementSlice, deleteElement, copyElement, setElements, getElementById, updateElement, saveElement, importElements } = elementSlice.actions;
export const elementReducer = elementSlice.reducer;

  
  // extraReducers: (builder)=>{
  //   builder.addCase(getElements.pending,(state)=> {
  //     state.isLoading = true;
  //   }),
  //   builder.addCase(getElements.fulfilled,(state,action)=> {
  //     state.isLoading = false;
  //     state.elements = action.payload;
  //   }),
  //   builder.addCase(getElements.rejected,(state,action)=> {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   })
  // },