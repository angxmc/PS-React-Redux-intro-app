import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo } from "../features/todos/todosSlice";
// TODO:
//button to delete a todo

export default function TodoList() {
  //read data from state
  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  //create a input to add new todos
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li key={todo.id}>{todo.text}</li>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>del</button>
          </div>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && dispatch(addTodo(newTodo))}
      />
      <button onClick={() => dispatch(addTodo(newTodo))}>add</button>
    </div>
  );
}
