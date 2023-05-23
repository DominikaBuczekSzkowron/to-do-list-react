import "./style.css";

const Form = () => (
    <form className="section__form">
        <input className="section__form--input" placeholder="Co jest do zrobienia?" autoFocus
            type="input reset" />
        <button className="section__form--buttonAddNewTask ">Dodaj zadanie</button>
    </form>
);

export default Form;
