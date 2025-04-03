import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchGameDetails } from '../services/rawgAPI';
import { FaArrowLeft, FaStar, FaCalendarAlt, FaGamepad } from 'react-icons/fa';


const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const getGameDetails = async () => {
      const gameData = await fetchGameDetails(id);
      setGame(gameData);
      setLoading(false);
    };
    getGameDetails();
  }, [id]);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );

  if (!game) return <div className="error-message">Game not found</div>;

  return (
    <div className="game-details-container">
      {/* Header com imagem de fundo */}
      <div 
        className="game-header"
        style={{ backgroundImage: `url(${game.background_image})` }}
      >
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Voltar
        </button>
        <div className="header-overlay">
          <h1>{game.name}</h1>
          <div className="game-meta">
            <span><FaStar /> {game.rating}</span>
            <span><FaCalendarAlt /> {game.released}</span>
            <span><FaGamepad /> {game.playtime} horas</span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="game-content">
        {/* Abas de navegação */}
        <div className="tabs">
          <button 
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
          >
            Descrição
          </button>
          <button 
            className={activeTab === 'details' ? 'active' : ''}
            onClick={() => setActiveTab('details')}
          >
            Detalhes
          </button>
          
        </div>

        {/* Conteúdo das abas */}
        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-section">
              <h2>Sobre o jogo</h2>
              <div dangerouslySetInnerHTML={{ __html: game.description }} />
            </div>
          )}

          {activeTab === 'details' && (
            <div className="details-section">
              <div className="detail-row">
                <h3>Plataformas</h3>
                <p>{game.platforms?.map(p => p.platform.name).join(', ')}</p>
              </div>
              <div className="detail-row">
                <h3>Gêneros</h3>
                <p>{game.genres?.map(g => g.name).join(', ')}</p>
              </div>
              <div className="detail-row">
                <h3>Desenvolvedor</h3>
                <p>{game.developers?.map(d => d.name).join(', ')}</p>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="media-section">
              <h2>Capturas de tela</h2>
              <div className="screenshots">
                {game.short_screenshots?.slice(0, 5).map((screenshot, index) => (
                  <img 
                    key={index} 
                    src={screenshot.image} 
                    alt={`Screenshot ${index + 1} de ${game.name}`} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;