import AddItems from "./AddItems";
import css from "./TodoItems.module.css";
export default function TodoItems({ todoItems }) {
  return (
    <>
      <div className={css.itemsContainer}>
        {todoItems.map((item, id) => (
          <AddItems key={id} todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
}
