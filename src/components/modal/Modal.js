import "./Modal.css";

function Modal({ setMistake }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Введите что-то в форму</p>
        <button onClick={() => setMistake(false)}>Закрыть окно</button>
      </div>
    </div>
  );
}

export default Modal;
