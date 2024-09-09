import styles from "./FoodInput.module.css";
export default function FoodInput({ handleOnKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your favorite food"
        className={styles.foodInput}
        onKeyDown={handleOnKeyDown}
      />
    </>
  );
}
