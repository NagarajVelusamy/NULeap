import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "../../../types/task";
import { TStatus } from "../../../types/status";

type TUpdateTaskType = {
  task: TTask;
  newType: TStatus;
};

export type TInitialState = {
  backlog: TTask[];
  todo: TTask[];
  inprogress: TTask[];
  done: TTask[];
};

const initialState: TInitialState = {
  backlog: [],
  todo: [],
  inprogress: [],
  done: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TTask>) => {
      const task = action.payload;

      state[task.type].push(task);
    },

    updateTaskType: (state, action: PayloadAction<TUpdateTaskType>) => {
      let { task, newType } = action.payload;

      // Remove the task from the current column
      state[task.type] = state[task.type].filter((data) => data.id !== task.id);

      // Update the task type
      task = {
        ...task,
        type: newType,
      };

      // Push the task to the new column
      state[task.type].push(task);
    },

    deleteTask: (state, action: PayloadAction<TTask>) => {
      const task = action.payload;
      state[task.type] = state[task.type].filter((data) => data.id !== task.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, updateTaskType, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
