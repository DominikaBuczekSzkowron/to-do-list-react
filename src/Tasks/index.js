import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="section__list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`section__list--item ${task.done && hideDone
                        ? "section__list--hideItem"
                        : ""} `
                }
            >
                <button
                    className="section__form--buttonDone"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {
                        task.done
                            ? "✔"
                            : ""}
                </button>

                <span
                    className={`section__list--text ${task.done
                            ? " section__list--doneItem"
                            : ""}`}>{task.content}
                </span>

                <button
                    className="section__form--buttonRemove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;