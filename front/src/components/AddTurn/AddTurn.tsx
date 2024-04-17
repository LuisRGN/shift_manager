import React, { useState } from 'react'
import axios from "axios"
import { POST_TURNS_URL } from '../../config/UrlConfig'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import styles from "./AddTurn.module.css"
import { addTurn} from '../../redux/userSlice';
import { AddTurnProps, State, Turn } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';
import { validateTurns } from '../../helpers/validateTurns';

const POST_TURN_URL = POST_TURNS_URL;

export const AddTurn = ({isOpen, closeModal}: AddTurnProps) => {
    
    const userId = useSelector((state: State) => state.user?.userData?.user?.id);
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        date: "",
        time: "",
        description: ""
    })
    const [errors, setError] = useState({
        date: "",
        time: "",
        description: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setInput (prevInput => ({
            ...prevInput, [name]: value
        }))
        setError(prevError => ({
            ...prevError,
            [name]: validateTurns({...input,[name]:value})[name]
        }))
    }

    const disableWeekends = (date: string) => {
        return moment(date).isoWeekday() >= 6;
    }

    const handleClearDate = () => {
        setInput({
            ...input,
            date: ""
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInput({
            date: "",
            time: "" ,
            description: ""
        })
        const newTurn: Turn = {
            id: userId,
            date: new Date(input.date),
            time: input.time,
            description: input.description,
            status: "Active"
        }
        if (disableWeekends(input.date)){
            Swal.fire({
                title:"No se pueden programar citas para sábados o domingos",
                icon: "warning"
            })
            return
        }

        if (!input.date || moment(input.date).isBefore(moment().format("YYYY-MM-DD"))) {
            Swal.fire({
                title:"Seleciona una fecha valida",
                icon: "warning"
            })
            return
        }
        if (!input.time) {
            Swal.fire({
                title:"Eliga una hora",
                icon: "warning"
            })
            return
        }
        try {
        const response = await axios.post(POST_TURN_URL, newTurn)
        dispatch(addTurn(response.data as Turn))
        Swal.fire({
            title:"Formulario enviado correctamente",
            icon: "success" 
        })
        closeModal();
    } catch (error: unknown) {
        if(axios.isAxiosError(error)) {
           console.error(error.message)
            if (error.response && error.response.status === 400) {
                Swal.fire({
                    title:"No se pudo enviar el formulario",
                    icon:"error"
                })
                console.log(error)
            }  
        }
     }
    }
    if (!isOpen) return null;
    
  return (
    <div className={styles.backdrop}>
        <div className={styles.content}>
        <button onClick={closeModal} className={styles.button}>X</button>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Crear un nuevo turno</h2>
                <label htmlFor="date">Fecha</label>
                <input type="date" name="date" id="date" value={input.date} onChange={handleChange}
                min={moment().format("YYYY-MM-DD")}
                disabled={disableWeekends(input.date)}/>
                <p style={{opacity: errors.date ? 1 : 0, minHeight: "20px" }}>{errors.date}</p>
                <button type="button" onClick={handleClearDate} className={styles.enviar}>Limpiar fecha</button>

                <label htmlFor="time">Hora</label>
                <select name="time" id="time" value={input.time} onChange={handleChange}>
                    <option disabled>Elige un horario</option>
                    <option></option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                </select>
                <p style={{opacity: errors.time ? 1 : 0, minHeight: "20px" }}>{errors.time}</p>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" id="description" value={input.description} onChange={handleChange} />
                <p style={{opacity: errors.description ? 1 : 0, minHeight: "20px" }}>{errors.description}</p>

                <input type="submit" value="Enviar" disabled={!input.date || !input.time || !input.description} className={styles.enviar}/>
            </form>
        </div>
    </div>
  )
}
