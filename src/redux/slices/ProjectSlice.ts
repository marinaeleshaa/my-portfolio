import { createSlice } from "@reduxjs/toolkit";

export interface ProjectState {
    active: number;
}

const initialState: ProjectState = {
  active: 0,
};

const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    increment: (state) => {
      state.active += 1;
    },
  },
});

export const { increment } = ProjectSlice.actions;
export default ProjectSlice.reducer;
