import React, { useState, useEffect } from 'react';
import axios from 'axios';


export function GameInfo () {
  const [games, setGames] = useState([]);
  const [developers, setDevelopers] = useState([])
  const apiKey = 'f418a7f4c04b49ad96091a74dcfe31d4'; 

  useEffect(() => {
    const fetchPopularGames = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games', {
          params: {
            key: apiKey,
            ordering: '-added',
          },
        });

        if (response.data.results) {
          setGames(response.data.results);
        } else {
          throw new Error('Failed to fetch data from Rawg API');
        }

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

   

    fetchPopularGames();
  }, [apiKey]);

  return (
    <div className="card">
      <h1>Popular Games</h1>
      <ul id="listofgames">
        {games.map((game, index) => (
          <li key={index}>
			<img id="coverart"src={game.background_image} alt={game.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            <strong>{game.name}</strong> - Released: {game.released} Rating: <strong>{game.rating}</strong>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameInfo;