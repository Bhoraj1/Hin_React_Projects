import styles from "./ButtonsContainer.module.css";
export default function ButtonsContainer({ handleButtonClick }) {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {ButtonNames.map((button, id) => (
        <button
          key={id}
          className={styles.button}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
