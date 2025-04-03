import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  // Simular preço como na Steam
  const hasDiscount = Math.random() > 0.7;
  const price = (Math.random() * 50 + 10).toFixed(2);
  const discountPrice = hasDiscount ? (price * 0.7).toFixed(2) : null;

  return (
    <div className="game-card">
      <Link to={`/game/${game.id}`}>
        <img src={game.background_image || 'https://via.placeholder.com/300x150'} alt={game.name} />
        <div className="game-info">
          <h3 className="game-title">{game.name}</h3>
          <div className="game-price">
            {hasDiscount ? (
              <>
                <span className="discount">${price}</span>
                <span className="price">${discountPrice}</span>
              </>
            ) : (
              <span className="price">${price}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default GameCard;