import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <div className="section__bothButtons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="section__bothButtons">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                onClick={setAllDone}
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