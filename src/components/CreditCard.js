import styles from "./CreditCard.module.css"; // CSS 모듈을 올바르게 임포트

export default function CreditCard({ card }) {
  return (
    <div className={styles.card}>
      <h3>{card.name}</h3>
      <p>{card.number}</p>
      <p>Expiry: {card.expiry}</p>
    </div>
  );
}
