import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import privacySlice from "./PrivacySlice";

const CounterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default CounterStore;
