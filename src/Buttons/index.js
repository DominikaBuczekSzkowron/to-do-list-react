import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="section__bothButtons">
        {tasks.length > 0 && (
            <>
                <button className="section__bothButtons">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="section__bothButtons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);
export default Buttons;