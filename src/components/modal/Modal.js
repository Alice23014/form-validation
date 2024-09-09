import "./Modal.css";

function Modal({ setMistake, mistakeText }) {
  return (
    <div className="modal-overlay" onClick={() => setMistake(false)}>
      <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
        <p>{mistakeText}</p>
        <button onClick={() => setMistake(false)}>Закрыть окно</button>
      </div>
    </div>
  );
}

export default Modal;
