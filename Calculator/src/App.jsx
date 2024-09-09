import { useCallback } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [showval, setShowVal] = useState();

  const onButtonClick = (button) => {
    if (button === "C") {
      setShowVal("");
    } else if (button === "=") {
      const result = eval(showval);
      setShowVal(result);
    } else {
      const newValue = showval + button;
      setShowVal(newValue);
    }
  };

  return (
    <>
      <center>
        <div className={styles.calculator}>
          <Display display={showval} />
          <ButtonsContainer handleButtonClick={onButtonClick} />
        </div>
      </center>
    </>
  );
}

export default App;
