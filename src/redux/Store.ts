import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./slices/ProjectSlice";

export const store = configureStore({
  reducer: {
    project: ProjectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
