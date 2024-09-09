import { useState } from "react";
import Items from "./Items";
export default function FoodItems({ items }) {
  const [active, setActive] = useState([]);

  const onBuyButton = (item, event) => {
    let newItem = [...active, item];
    setActive(newItem);
  };

  return (
    <ul className="list-group b-second ">
      {items.map((item, id) => (
        <Items
          key={id}
          foodItem={item}
          bought={active.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
}
