import { IoMdAdd } from "react-icons/io";
import { useRef } from "react";
import { TodoItemsContext } from "../store/Todo_Items_Store";
import { useContext } from "react";

export default function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleButtonChange = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const itemsDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, itemsDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleButtonChange}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>

        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
