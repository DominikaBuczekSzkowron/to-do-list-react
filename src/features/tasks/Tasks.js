import { useSelector } from "react-redux/es/hooks/useSelector";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

import { selectTasks } from "./taskSlice";

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form tasks={tasks} />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
