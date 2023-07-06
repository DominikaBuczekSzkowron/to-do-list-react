import { throttle, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga jest podłączona");
  yield throttle(1000, fetchExampleTasks.type, fetchExampleTasksHandler);
}
