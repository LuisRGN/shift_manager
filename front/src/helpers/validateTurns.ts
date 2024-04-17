export const validateTurns = (input) => {
    const errors = {};

    if (!input.date) errors.date = "Ingrese una fecha"
    if (!input.time) errors.time = "Ingrese una hora"
    if (!input.description) errors.description = "Ingrese una descripcion"

    return errors;
}
