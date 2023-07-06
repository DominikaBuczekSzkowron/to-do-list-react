import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import taskReducer from "./features/tasks/taskSlice";
import { watchFetchExampleTasks } from "./features/tasks/taskSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchExampleTasks);
export default store;
