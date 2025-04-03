import React, { useState, useEffect } from 'react';
import { fetchGames } from '../services/rawgAPI';
import GameList from '../components/GameList';

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
      setLoading(false);
    };
    getGames();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Jogos mais populares</h2>
      <GameList games={games} />
    </div>
  );
};

export default Home;