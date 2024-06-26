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
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 12;

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

    const totalGames = filteredGames.length;
    const totalPages = Math.ceil(totalGames / gamesPerPage);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };



    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre(event.target.value);
    };
    const handleButtonClick = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <div className={styles.mainSelect}>
                <div className={styles.containerSelect}>
                    <div>
                        <input type="search" value={searchQuery} onChange={handleSearchChange} />
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
                    {currentGames.map((game: Game, index: number) => (
                        <button key={index} className={styles.key} onClick={() => handleButtonClick(game.game_url)}>
                            <img src={game.thumbnail} alt={game.title} />
                            <h2>{game.title}</h2>
                        </button>
                    ))}</div>
                <div className={styles.pagination}>
                    <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={() => goToPage(index + 1)} className={currentPage === index + 1 ? styles.active : ''}>
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
                </div>
            </div>
        </div>
    );
};
