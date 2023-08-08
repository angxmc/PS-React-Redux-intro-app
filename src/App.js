import "./App.css";
import TodoList from "./components/TodoList";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <h1> Redux Intro App</h1>
      <Counter />

      <hr />
      <TodoList/>
    </div>
  );
}

export default App;
