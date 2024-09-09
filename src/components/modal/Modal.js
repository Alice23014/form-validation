import "./Modal.css";

function Modal({ setMistake, mistakeText }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{mistakeText}</p>
        <button onClick={() => setMistake(false)}>Закрыть окно</button>
      </div>
    </div>
  );
}

export default Modal;
