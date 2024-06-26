import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Turn, UserState } from "../interfaces/interfaces";

const initialState: UserState = {
    userData: null,
    turnsData: []
}

const userSlice = createSlice({
    name: "actualUser",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setUserTurns: (state, action) => {
            state.turnsData = action.payload
        },
        addTurn: (state, action: PayloadAction<Turn>) => {
            state.turnsData.push(action.payload)
        },
        updateUserDetails: (state, action) => {
            state.userData = { ...state.userData, ...action.payload };
        },
    }
})

export const { setUserData, setUserTurns, addTurn, updateUserDetails } = userSlice.actions
export default userSlice.reducer;