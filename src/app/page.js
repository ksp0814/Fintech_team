// app/page.js
"use client"; // 클라이언트 컴포넌트로 설정

import { useState } from "react";
import CreditCard from "../components/CreditCard"; // 카드 컴포넌트 가져오기
import Modal from "../components/Modal"; // 모달 컴포넌트 가져오기

// 더미 카드 데이터
const dummyCards = [
  { id: 1, number: "1234 5678 9012 3456", name: "John Doe", expiry: "12/25" },
  { id: 2, number: "9876 5432 1098 7654", name: "Jane Smith", expiry: "11/24" },
  {
    id: 3,
    number: "5678 1234 8765 4321",
    name: "Bob Johnson",
    expiry: "10/26",
  },
];

export default function Home() {
  const [showCards, setShowCards] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = () => {
    setShowCards(!showCards);
    setSelectedCard(null); // Reset selected card when toggling cards
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="container">
      <button onClick={handleClick}>
        {showCards ? "Hide Cards" : "Show Cards"}
      </button>
      {showCards && (
        <div className="card-container">
          {dummyCards.map((card) => (
            <CreditCard
              key={card.id}
              card={card}
              onClick={() => handleCardClick(card)}
              isSelected={selectedCard && selectedCard.id === card.id}
            />
          ))}
        </div>
      )}
      {selectedCard && (
        <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}
