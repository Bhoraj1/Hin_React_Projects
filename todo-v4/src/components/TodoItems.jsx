import AddItems from "./AddItems";
import css from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/Todo_Items_Store";
import { useContext } from "react";

export default function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className={css.itemsContainer}>
        {todoItems.map((item, id) => (
          <AddItems key={id} todoName={item.name} todoDate={item.Date} />
        ))}
      </div>
    </>
  );
}
