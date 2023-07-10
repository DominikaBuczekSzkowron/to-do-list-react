import { fetchExampleTasks } from "../../taskSlice";
import { Button } from "../styled";
import { useDispatch } from "react-redux";

const ExamplesTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
    </div>
  );
};
export default ExamplesTasksButton;
