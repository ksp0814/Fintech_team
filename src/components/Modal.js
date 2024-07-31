// components/Modal.js
import styles from "./Modal.module.css";

export default function Modal({ card, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{card.name}</h2>
        <p>Card Number: {card.number}</p>
        <p>Expiry Date: {card.expiry}</p>
      </div>
    </div>
  );
}
