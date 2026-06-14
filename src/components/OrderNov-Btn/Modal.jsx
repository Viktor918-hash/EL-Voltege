// Modal.jsx
import "./Modal.css";
import { ArrowUpRight } from "lucide-react";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
        <h3 className="modal__title">Reserve Your EV</h3>

        <div className="modal__row">
          <div className="modal__field">
            <label className="modal__label">First Name</label>
            <input type="text" className="modal__input" placeholder="John" />
          </div>
          <div className="modal__field">
            <label className="modal__label">Last Name</label>
            <input type="text" className="modal__input" placeholder="Doe" />
          </div>
        </div>

        <div className="modal__field">
          <label className="modal__label">Email</label>
          <input
            type="email"
            className="modal__input"
            placeholder="email@example.com"
          />
        </div>

        <div className="modal__field">
          <label className="modal__label">Message</label>
          <input
            type="text"
            className="modal__input"
            placeholder="Your message"
          />
        </div>

        <button className="modal__btn">
          Order Now <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
