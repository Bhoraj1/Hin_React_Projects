import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoReducer =(currentTodItems,action) =>{
  let newTodoItems = currentTodItems;
if (action.type === "ADD_TODO") {
      newTodoItems =[
      ...currentTodItems,
       { name: action.payload.todoName, Date: action.payload.itemsDate },
    ]  
  }
  else if(action.type === "DELETE_ITEMS"){
    newTodoItems = currentTodItems.filter((item) => item.name !== 
    action.payload.todoName);
  }
  return newTodoItems;
}


const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoiItems] = useReducer(todoReducer, []);

  const addNewItem = (todoName, itemsDate) => {
    const newItemsAction = {
      type: "ADD_TODO",
      payload: {
        todoName,
        itemsDate,
      },
    };
    dispatchTodoiItems(newItemsAction);
  };

  const deleteItem = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEMS",
      payload: {
        todoName,
      },
    };
    dispatchTodoiItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addNewItem, deleteItem }}>
        {children}
      </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
