export interface State {
    user: {
        userData: {
            user: {
                id: number;
                name: string;
                email: string;
                birthdate: Date;
                dni: number;
            }
        },
        turnsData: Turn[];
    }
}
export interface Turn {
    id: number;
    date: Date;
    time: string;
    description: string;
    status: string;
}

export interface User {
    name: string,
    email: string,
    birthdate: Date,
    dni: number,
    username: string,
    password: string
}
export interface UserState {
    userData: User | null;
    turnsData: Turn[];
}

export interface AddTurnProps {
    isOpen: boolean;
    closeModal: () => void;
}
export interface TursProps {
    id: number,
    date: Date,
    time: string,
    description: string,
    status: string,
    handleCancel: (id: number) => void
}