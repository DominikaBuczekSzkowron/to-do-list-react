import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./taskSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga jest podłączona");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
