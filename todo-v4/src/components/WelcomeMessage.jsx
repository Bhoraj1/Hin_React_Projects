import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/Todo_Items_Store";

export default function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <h1 className={styles.Welcome}>Enjoy Your Day</h1>
  );
}
