import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  descriptions: string;
  isCompleted?: boolean;
};

type TinitialState = {
  todos: TTodo[];
};

const initialState: TinitialState = {
  todos: [],
};

const tudoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    troggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id == action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { addTodos, removeTodo, troggleComplete } = tudoSlice.actions;
export default tudoSlice.reducer;
