import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { elementReducer } from "../slices/element";
import { appReducer } from "../slices/appSlice";
const store = configureStore({
  reducer: {
    logins: elementReducer,
    app: appReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
