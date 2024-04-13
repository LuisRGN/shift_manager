import { useEffect, useState } from "react";
import axios from "axios"
import { GET_USER_ID_URL, PUT_TURNS_URL } from "../../config/UrlConfig";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserTurns } from "../../redux/userSlice";
import { TurnsCard } from "../../components/TurnsCard/TurnsCard";
import { AddTurn } from "../../components/AddTurn/AddTurn";
import styles from "./Turns.module.css"
import { State, Turn } from "../../interfaces/interfaces";

const USER_ID_URL = GET_USER_ID_URL;
const TURN_CANCEL_URL = PUT_TURNS_URL;

const Turns = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector((state: State) => state.user?.userData?.user?.id)
    const turns = useSelector((state: State) => state.user?.turnsData)
    const [modalOpen, setModalOpen] = useState(false);
    
    useEffect(()=>{
        const getData = async () => {
            try {
                const response = await axios.get(USER_ID_URL + userId);
                const turns = response.data.turns;
                dispatch(setUserTurns(turns))
            } catch (error: unknown) {
                if(axios.isAxiosError(error))
                console.error(error.message);
            }
        }
        if (userId) {
          getData()  
        }
    }, [dispatch, userId]);

    useEffect(() => {
       if (!userId) navigate("/")
    }, [navigate, userId])

    const handleCancel = async (turnsId: number) => {
        try {
            const response = await axios.put(TURN_CANCEL_URL + turnsId)
            const data = response.data
            console.log(data)
            const refresh = await axios.get(USER_ID_URL + userId)
            const turns = refresh.data.turns;
            dispatch(setUserTurns(turns))
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                console.error("Error response:", error.response.data);
            } else {
                console.error("Error añadiendo un turno:", error);
            }
        }
    }

    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <h1>Mis Reservas</h1>
            <button onClick={() => setModalOpen(true)} >Agregar nuevo turno</button>
            <div className={styles.cards}>
                {turns.length ? turns.map((turn: Turn) => (
                    <TurnsCard 
                    key={turn.id}
                    id={turn.id}
                    date={turn.date}
                    time={turn.time}
                    description={turn.description}
                    status={turn.status}
                    handleCancel={handleCancel}
                    />
                )): <h2>No hay turnos disponibles</h2>}
            </div>
            <AddTurn isOpen={modalOpen} closeModal={closeModal} />
        </div>
    )
}
export default Turns