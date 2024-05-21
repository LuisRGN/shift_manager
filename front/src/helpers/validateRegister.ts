interface Register {
    username: string
    password: string
    email: string
    birthdate: Date
    dni: string
    name: string
}

interface RegisterErrors {
    username?: string
    password?: string
    email?: string
    birthdate?: string
    dni?: string
    name?: string
}

export const validateRegister = (input: Register) => {
    const emailRegExp = /\S+@\S+\.\S+/;
    const birthdayRegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const DNIRegExp = /^\d{7,11}$/;
    const usernameRegExp = /^[a-zA-Z0-9_-]{4,20}$/;
    const nameRegExp = /^[^\s]{2,30}$/;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const errors: RegisterErrors = {};

    if (!input.name) errors.name = "Debe ingresar un nombre"
    else {
        if (!nameRegExp.test(input.name)) errors.name = "El nombre debe tener entre 2 y 30 caracteres"
    }
    if (!input.email) errors.email = "Debe ingresar un correo"
    else {
        if (!emailRegExp.test(input.email)) errors.email = "No es un correo valido"
    }
    if (!input.birthdate) errors.birthdate = "Ingrese su cumpleaños"
    else {
        if (!birthdayRegExp.test(input.birthdate.toISOString())) errors.birthdate = "Debe ingresar una fecha valida"
    }

    if (!input.dni) errors.dni = "Debe ingresar su numero de D.N.I"
    else {
        if (!DNIRegExp.test(input.dni)) errors.dni = "Debe ingresar un D.N.I que tenga entre 7 y 11 digitos"
    }

    if (!input.username) errors.username = "Debe ingresar un nombre de usuario"
    else {
        if (!usernameRegExp.test(input.username)) errors.username = "Debe tener entre 4 o 20 caracteres y solo puede usar - _ como caracter especial"
    }

    if (!input.password) errors.password = "Debe ingresar una contraseña"
    else {
        if (!passwordRegExp.test(input.password)) errors.password = "Debe tener por lo menos una mayuscula, una misnuscula y un minimo de 8 caracteres"
    }

    return errors;

}