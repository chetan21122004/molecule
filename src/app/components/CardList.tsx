import React from 'react';
import Card from './Card';

interface CardData {
  id: number;
  user: string;
  time: string;
  likes: number;
  caption: string;
  mainImage: string;
  additionalImages: string[];
}

interface CardListProps {
  cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div>
      {cards.map(card => (
        <Card
          key={card.id}
          user={card.user}
          id={card.id}
          time={card.time}
          likes={card.likes}
          caption={card.caption}
          mainImage={card.mainImage}
          additionalImages={card.additionalImages}
        />
      ))}
    </div>
  );
};

export default CardList; 