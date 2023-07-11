import { fetchExampleTasks } from "../../taskSlice";
import { Button } from "../styled";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const ExamplesTasksButton = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Pobierz przykładowe zadania");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    let timer;
    if (buttonText !== "Pobierz przykładowe zadania") {
      setIsButtonDisabled(true);
      timer = setTimeout(() => {
        setButtonText("Pobierz przykładowe zadania");
        setIsButtonDisabled(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [buttonText]);

  const handleButtonClick = () => {
    setButtonText("Ładowanie ☕︎");
    dispatch(fetchExampleTasks());
  };

  return (
    <div>
      <Button onClick={handleButtonClick} disabled={isButtonDisabled}>
        {buttonText}
      </Button>
    </div>
  );
};
export default ExamplesTasksButton;
