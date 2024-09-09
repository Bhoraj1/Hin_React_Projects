import css from "./Items.module.css";
export default function Items({ foodItem, bought, handleBuyButton }) {
  return (
    <li className={`${css["kg-item"]} list-group-item ${bought && "active"}`}>
      <span className={css["kg-span"]}>{foodItem}</span>
      <button
        className={`${css["button"]} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}
