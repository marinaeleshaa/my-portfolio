import { projectData } from "@/data/projectData";
import { createSlice } from "@reduxjs/toolkit";
export interface IProjectCard {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  link: string;
}

export interface ProjectState {
  active: number;
  content: IProjectCard[];
  activeProject: IProjectCard;
}

const initialState: ProjectState = {
  active: 0,
  content: projectData,
  activeProject: projectData[0],
};

const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setActiveProjectAction: (state, action) => {
      state.active = action.payload;
      const project = state.content.find((item) => item.id === action.payload);
      if (project) {
        state.activeProject = project;
      }
    },
  },
});

export const { setActiveProjectAction } = ProjectSlice.actions;
export default ProjectSlice.reducer;
