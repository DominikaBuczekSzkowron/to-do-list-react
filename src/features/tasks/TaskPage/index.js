import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../taskSlice";
import { DetailWrapper } from "../../styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container className="container">
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😞 "}
        body={
          !!task && (
            <DetailWrapper>
              <>
                <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
              </>
            </DetailWrapper>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;
