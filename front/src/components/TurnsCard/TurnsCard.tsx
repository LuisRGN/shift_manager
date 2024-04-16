import moment from "moment"
import styles from "./TurnsCard.module.css"
import { TursProps } from "../../interfaces/interfaces";


export const TurnsCard = ({id, date, time, description, status, handleCancel, handleDelete}: TursProps) => {
    const formattedDate = moment.utc(date).format("YYYY-MM-DD")

    const handleClik = () => {
        const today = moment().startOf('day');
        const tomorrow = moment().startOf('day').add(1, 'day');
        const appointmentDate = moment.utc(date).startOf('day');

        if (appointmentDate.isBefore(today, 'day')) {
            alert("No puedes cancelar una reserva pasada.");
        } else if (appointmentDate.isSame(today, 'day')) {
            alert("No puedes cancelar una reserva programada para hoy.");
        } else if (appointmentDate.isSame(tomorrow, 'day')) {
            alert("No puedes cancelar una reserva programada para mañana.");
        }
        else {
            if (confirm(`Vas a cancelar la reserva del día ${date}`)) {
                handleCancel(id);
            }
        }
    };

  return (
    <div className={styles.main}>
        <div>
      <button onClick={()=> handleDelete(id)}>X</button>

            <span>Fecha:</span>
            <span>{formattedDate}</span>
            <br />
            <span>Hora:</span>
            <span>{time}</span>
            <br />
            <span>Descripcion:</span>
            <span>{description}</span>
            <br />
            <span>Estado:</span>
            <span>{status}</span>

            <button onClick={handleClik} 
                    style={{visibility: status.toLowerCase() === "cancelled" ? 'hidden' : 'visible'}}
                >X</button>
        </div>
    </div>
  )
}
