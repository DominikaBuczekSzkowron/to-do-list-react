import "./style.css";

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task => (
            <li key={task.id} className={`section__list--item ${task.done && props.hideDoneTasks
                ? "section__list--hideItem"
                : ""} `}>

                <button className="section__form--buttonDone">{task.done
                    ? "✔"
                    : ""}
                </button>

                <span className={`section__list--text ${task.done
                    ? " section__list--doneItem"
                    : ""}`}>{task.content}
                </span>

                <button className="section__form--buttonRemove">
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;