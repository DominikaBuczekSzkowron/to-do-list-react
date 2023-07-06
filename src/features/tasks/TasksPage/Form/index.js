import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { TaskForm, ButtonAddNewTask } from "./styled";
import Input from "../../Input";
import { addTask } from "../../taskSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!newTaskContent.trim()) {
      return;
    }

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
  };
  return (
    <TaskForm onSubmit={onFormSubmit}>
      <Input
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
