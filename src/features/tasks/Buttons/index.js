import { selectTasks, toggleHideDone, setAllDone } from "../taskSlice";
import { Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </div>
  );
};
export default Buttons;
