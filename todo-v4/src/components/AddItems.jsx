import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo_Items_Store";
export default function AddItems({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  const handleDeleteClick = () => {
    deleteItem(todoName);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={handleDeleteClick}
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
