import { useState } from "react";
import "./Form.css";

function Form({ getFormData, formData }) {
  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();
    getFormData([
      { id: Date.now(), name: nameInput, number: numberInput },
      ...formData,
    ]);
    setNameInput('')
    setNumberInput('')
  }

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        ></input>
        <input
          type="number"
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
        ></input>
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default Form;
