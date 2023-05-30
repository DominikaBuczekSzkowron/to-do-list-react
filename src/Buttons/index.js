import "./style.css";

const Buttons = ({ tasks, hideDones, toggleHideDone }) => (

    <div className="section__bothButtons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="section__bothButtons">
                    {hideDones ? "Pokaż" : "Ukryj"} ukończone
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