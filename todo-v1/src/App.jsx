import AddItems from "./components/AddItems";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <AddItems />
      </div>
    </center>
  );
}
export default App;
