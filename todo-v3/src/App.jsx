import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItems = (todoName, itemsDate) => {
    console.log(`New items: ${todoName} and Date: ${itemsDate} is Showing.`);

    //this is important to update latest state.(update state from previous state)
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: todoName, Date: itemsDate },
    ]);
  };

  const handleDeleteItems = (todoName) => {
    const newtodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newtodoItems);
    console.log(`Deleted items is: ${todoName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItems={handleNewItems} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteChange={handleDeleteItems} />
    </center>
  );
}
export default App;
