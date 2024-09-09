import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const HandleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const HandleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const HandlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  const HandleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: Number(inputElement.current.value),
      },
    });
    inputElement.current.value = "";
  };

  const HandleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: Number(inputElement.current.value),
      },
    });
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={HandleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={HandleDecrement}
        >
          Decrement
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={HandlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row ">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={HandleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={HandleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
}
