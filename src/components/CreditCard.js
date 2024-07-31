// components/CreditCard.js
import styles from "./CreditCard.module.css";

export default function CreditCard({ card, onClick, isSelected }) {
  const imageUrl = `/images/card${card.id}.png`;

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      <img src={imageUrl} className={styles.cardImage} />
      {/* <h3>{card.name}</h3>
      <p>{card.number}</p>
      <p>Expiry: {card.expiry}</p> */}
    </div>
  );
}
