import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if (!newTaskContent.trim()) {
            return;
        };
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");

    };
    return (
        <form className="section__form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="section__form--input"
                placeholder="Co jest do zrobienia?" autoFocus type="input reset"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="section__form--buttonAddNewTask ">Dodaj zadanie</button>
        </form>
    );
}


export default Form;
