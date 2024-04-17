export const validateLogin = (input) => {
    const errors = {};

    if (!input.username) errors.username = "Ingrese su nombre"
    if (!input.password) errors.password = "Ingrese la contraseña"

    return errors;
}