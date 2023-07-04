import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone } from "../taskSlice";
import { List, Item, Content, ButtonDone, ButtonRemove } from "./styled";

const TaskList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ButtonDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </ButtonDone>
          <Content done={task.done}>{task.content}</Content>
          <ButtonRemove onClick={() => removeTask(task.id)}>🗑️</ButtonRemove>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
