import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { HEADER_HOST, HEADER_KEY, URL } from "../../config/ENVS";
import styles from "./Games.module.css"

export const Games = () => {
    const [games, setGames] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All');
    
    const axiosGamesData = useCallback(async () => {
        const options = {
        method: 'GET',
        url: URL,
        headers: {
            'X-RapidAPI-Key': HEADER_KEY,
            'X-RapidAPI-Host': HEADER_HOST
        }
    };
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        const fetchGames = async () => {
            const gamesData = await axiosGamesData();
            if (gamesData) {
                setGames(gamesData);
            }
        };
        fetchGames();
    }, [axiosGamesData]);

    const filteredGames = games.filter(game => selectedGenre === 'All' || game.genre === selectedGenre);

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <div>
            <select value={selectedGenre} onChange={handleGenreChange}>
                <option value="All">Todos los géneros</option>
                <option value="Shooter">Disparos</option>
                <option value="ARPG">ARPG</option>
                <option value="Strategy">Estrategia</option>
                <option value="Action">Accion</option>
                <option value="Action RPG">Accion RPG</option>
                <option value="MMORPG">MMORPG</option>
                <option value="MMOARPG">MMOARPG</option>
                <option value="Fighting">Pelea</option>
                <option value="MOBA">MOBA</option>
                {/* Agrega más opciones según los géneros disponibles */}
            </select>
            <div className={styles.mainGames}>
            {filteredGames.map((game, index) => (
                <div key={index}>
                    <h2>{game.title}</h2>
                    <img src={game.thumbnail} alt={game.title} />
                    <h2>{game.genre}</h2>
                </div>
            ))}</div>
        </div>
    );
};
