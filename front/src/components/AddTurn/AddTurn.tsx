import React, { useState } from 'react'
import axios from "axios"
import { POST_TURNS_URL } from '../../config/UrlConfig'
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from "./AddTurn.module.css"

const POST_TURN_URL = POST_TURNS_URL;
interface AddTurnProps {
    isOpen: boolean;
    closeModal: () => void;
}
interface State {
    user: {
        userData: {
            user: {
                id: number;
            }
        }
    }
}

export const AddTurn = ({isOpen, closeModal}: AddTurnProps) => {
    
    const userId = useSelector((state: State) => state.user?.userData?.user?.id);

    const [input, setInput] = useState({
        date: "",
        time: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setInput (prevInput => ({
            ...prevInput, [name]: value
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
            time: "" 
        })
        const newTurn = {
            ...input, userId 
        }
        if (disableWeekends(input.date)){
            alert("No se pueden programar citas para sábados o domingos")
            return
        }

        if (!input.date || moment(input.date).isBefore(moment().format("YYYY-MM-DD"))) {
            alert("Seleciona una fecha valida")
            return
        }
        if (!input.time) {
            alert("Eliga una hora")
            return
        }
        try {
        const response = await axios.post(POST_TURN_URL, newTurn)
        console.log(response.data)
        alert("Formulario enviado correctamente")
        closeModal();
    } catch (error: unknown) {
        if(axios.isAxiosError(error)) {
           console.error(error.message)
            if (error.response && error.response.status === 400) {
                alert("No se pudo enviar el formulario")
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
            <form onSubmit={handleSubmit}>
                <h2>Crear un nuevo turno</h2>
                <label htmlFor="date">Fecha</label>
                <input type="date" name="date" id="date" value={input.date} onChange={handleChange}
                min={moment().format("YYYY-MM-DD")}
                disabled={disableWeekends(input.date)}/>
                <br />
                <button type="button" onClick={handleClearDate}>Limpiar fecha</button>
                <p style={{visibility: input.date === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>

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
                <p style={{visibility: input.time === "" ? 'visible' : 'hidden'}}>el campo esta vacio</p>

                <input type="submit" value="Enviar" disabled={!input.date || !input.time}/>
            </form>
        </div>
    </div>
  )
}
