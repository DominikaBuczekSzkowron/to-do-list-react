import { useDispatch, useSelector } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../taskSlice";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { List, Item, Content, ButtonDone, ButtonRemove } from "./styled";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ButtonDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </ButtonDone>
          <Content $done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <ButtonRemove onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </ButtonRemove>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
