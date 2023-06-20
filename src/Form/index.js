import React, { useState, useRef } from "react";
import { TaskForm, TaskInput, ButtonAddNewTask } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!newTaskContent.trim()) {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };
  return (
    <TaskForm onSubmit={onFormSubmit}>
      <TaskInput
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        ref={inputRef}
        type="input reset"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <ButtonAddNewTask onClick={focusInput}>Dodaj zadanie</ButtonAddNewTask>
    </TaskForm>
  );
};

export default Form;
