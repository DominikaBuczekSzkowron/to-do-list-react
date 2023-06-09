import { useDispatch, useSelector } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../taskSlice";
import { useQueryParameter } from "../queryParameters";
import {
  List,
  Item,
  Content,
  ButtonDone,
  ButtonRemove,
  ItemNavLink,
} from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
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
            <ItemNavLink to={`/zadania/${task.id}`}>{task.content}</ItemNavLink>
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
