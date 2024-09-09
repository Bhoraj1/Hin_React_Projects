import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItems];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <div className="kg-first">
          <h1 className="kg-heading">Healthy food</h1>
          <FoodInput handleOnKeyDown={onKeyDown} />
          <ErrorMessage items={foodItems} />
          <FoodItems items={foodItems} />
        </div>
      </Container>
      {/* <Container>
      <p>This is the another children with same css properties of 
        that container. :by Bhoraj Mall Thakuri.
      </p>
    </Container> */}
    </>
  );
}

export default App;
