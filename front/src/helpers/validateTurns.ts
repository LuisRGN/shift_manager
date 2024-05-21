interface Turns {
    date: string,
    time: string,
    description: string
}

interface TurnsErrors {
    date?: string,
    time?: string,
    description?: string
}

export const validateTurns = (input: Turns) => {
    const errors: TurnsErrors = {};

    if (!input.date) errors.date = "Ingrese una fecha"
    if (!input.time) errors.time = "Ingrese una hora"
    if (!input.description) errors.description = "Ingrese una descripcion"

    return errors;
}
