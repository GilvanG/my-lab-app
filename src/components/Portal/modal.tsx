import { createPortal } from "react-dom";
import "./modal.css";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }:IModal) {
  if (!isOpen) return null;
  const el = document.getElementById("portal-root");
  if (!el) {
    return "";
  }
  return createPortal(
    <div className="portal-root">
      <div className="modal-container">
        <div className="modal-body">
          <p>sample modal</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    el
  );
}
