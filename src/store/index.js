import { configureStore } from "@reduxjs/toolkit";
import EXAM_Reducer from "../reducers/examreducer";
const store = configureStore({
  reducer: {
    EXAM: EXAM_Reducer,
  },
});

export default store;
