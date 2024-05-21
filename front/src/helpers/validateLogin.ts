interface Login {
    username: string
    password: string
}
interface LoginErrors {
    username?: string;
    password?: string;
}

export const validateLogin = (input: Login) => {
    const errors: LoginErrors = {};

    if (!input.username) errors.username = "Ingrese su nombre"
    if (!input.password) errors.password = "Ingrese la contraseña"

    return errors;
}