import './Modal.css';
import { useState } from "react";

function Modal(){
    const [modalVisibility, setModalVisibility] = useState(false);
    
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <p>Введите что-то в форму</p>
                <button>Закрыть окно</button>
            </div>
        </div>
    )
}

export default Modal;