import { useState } from "react";
import "./Form.css";

function Form({ getFormData, getMistake, getMistakeText }) {
  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
    if (!nameInput && !numberInput) {
      return (
        getMistake(true) & getMistakeText("Имя и номер не могут быть пустыми")
      );
    }
    if (!nameInput) {
      return getMistake(true) & getMistakeText("Имя не может быть пустым");
    }

    if (!numberInput) {
      return getMistake(true) & getMistakeText("Номер не может быть пустым");
    }
    if (nameInput && numberInput) {
      getFormData((prev) => [
        { id: Date.now(), name: nameInput, number: numberInput },
        ...prev,
      ]);
      setNameInput("");
      setNumberInput("");
    }
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
