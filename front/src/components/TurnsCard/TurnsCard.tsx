import moment from "moment"
import styles from "./TurnsCard.module.css"
import { TursProps } from "../../interfaces/interfaces";
import Swal from "sweetalert2";


export const TurnsCard = ({id, date, time, description, status, handleCancel, handleDelete}: TursProps) => {
    const formattedDate = moment.utc(date).format("YYYY-MM-DD")

    const handleClik = () => {
        const today = moment().startOf('day');
        const tomorrow = moment().startOf('day').add(1, 'day');
        const turnDate = moment.utc(date).startOf('day');

        if (turnDate.isBefore(today, 'day')) {
          Swal.fire({
            title:"No puedes cancelar una reserva pasada.",
            icon:"error"
          })
        } else if (turnDate.isSame(today, 'day')) {
          Swal.fire({
            title:"No puedes cancelar una reserva programada para hoy.",
            icon: "error"
          })
        } else if (turnDate.isSame(tomorrow, 'day')) {
          Swal.fire({
            title:"No puedes cancelar una reserva programada para mañana.",
            icon: "error"
          })
        }
        else { 
          Swal.fire({
          title: "Estas seguro?",
          text: `Vas a cancelar el turno: ${description}, del dia ${formattedDate}!!`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si quiero cancelarlo!",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Cancelada!",
              text: "Tu turno a sido cancelado.",
              icon: "success"
            });
            handleCancel(id);
          }
        });
      }
    };
    const handleDeleteConfirmation = () => {
      const today = moment().startOf('day');
      const turnDate = moment.utc(date).startOf('day');

      if (turnDate.isBefore(today, 'day')) {
        Swal.fire({
          title: "¿Estás seguro?",
          text: `Vas a borrar este turno: ${description}!`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, lo quiero eliminar",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Eliminado!",
              text: `El turno ${description} ha sido eliminado.`,
              icon: "success"
            });
            handleDelete(id);
          }
        });
      } else {
        Swal.fire({
          title: "Operación denegada",
          text: "No puedes eliminar turnos futuros.",
          icon: "error"
        });
      }
  };

  return (
    <div className={styles.main}>
        <div>
      <button onClick={handleDeleteConfirmation}>X</button>
            <div>
             <span>Fecha:</span>
            <span>{formattedDate}</span>   
            </div>
            <div>
              <span>Hora:</span>
            <span>{time}</span>  
            </div>
            <div>
              <span>Descripcion:</span>
            <span>{description}</span>  
            </div>
            <div>
              <span>Estado:</span>
            <span>{status}</span>  
            </div>
            

            <button onClick={handleClik} 
                    style={{visibility: status.toLowerCase() === "cancelled" ? 'hidden' : 'visible'}}
                >X</button>
        </div>
    </div>
  )
}
