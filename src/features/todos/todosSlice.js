import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  //doesn't have to be an object of multiple things
  initialState: [
    { id: "1", text: "Learn React", completed: true },
    { id: "2", text: "Learn Redux", completed: false },
  ],
  //actions we are giving
  reducers: {
    //add todo and update the text with the input.
    addTodo: (state, action) => {
      //when we dispatch: dispatch(setNewTodo(addTodo)), addTodo will be the extracted and become the payload value
      const { payload } = action;
      state.push({ id: nanoid(), text: payload, completed: false });
    },
    //delete todo
    deleteTodo: (state, action) =>{
        //destructure payload from action
        const {payload} = action
        //filter out the id that is equal to the payload, so keep only the ones that are not equal to the id registered to payload. from whatever current state we have in Redux
        return state.filter((todo)=>todo.id!==payload)
    }
  },
});

// TODO: we need to export out actions creators
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
