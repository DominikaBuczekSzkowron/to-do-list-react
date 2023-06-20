import { BothButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div>
    {tasks.length > 0 && (
      <>
        <BothButtons onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </BothButtons>
        <BothButtons
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </BothButtons>
      </>
    )}
  </div>
);
export default Buttons;
