import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { HEADER_HOST, HEADER_KEY, URL } from "../../config/ENVS";
import styles from "./Games.module.css"

interface Game {
    genre: string
    title: string
    thumbnail: string
    game_url: string
}

export const Games = () => {
    const [games, setGames] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [searchQuery, setSearchQuery] = useState("");
    
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

    const filteredGames = games.filter((game: Game) =>
        (selectedGenre === 'All' || game.genre === selectedGenre) &&
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre(event.target.value);
    };
    const handleButtonClick = (url: string ) => {
        window.open(url, '_blank');
    };
    
    return (
        <div>
           <div className={styles.mainSelect}>
            <div className={styles.containerSelect}>
             <div>
                <input type="search" value={searchQuery} onChange={handleSearchChange}/>
            </div> 
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
                <option value="Card">Cartas</option>
                <option value="Sports">Deportes</option>
                <option value="Racing">Carreras</option>
                <option value="Card Game">Juego de cartas</option>
                <option value="MMO">MMO</option>
                <option value="Social">Social</option>
                <option value="Fantasy">Fantasia</option>
                <option value="Battle Royale">Battle Royale</option>
            </select>   
            </div> 
            </div>
         </div>
            <div className={styles.containerGame}>
             <div className={styles.mainGames}>
            {filteredGames.map((game: Game, index: number) => (
            <button key={index} className={styles.key} onClick={() => handleButtonClick(game.game_url)}>
                    <img src={game.thumbnail} alt={game.title} />
                    <h2>{game.title}</h2>
            </button>
            ))}</div>   
            </div>
        </div>
    );
};
