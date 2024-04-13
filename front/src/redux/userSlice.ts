import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData: {},
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
        }
    }
})

export const { setUserData, setUserTurns } = userSlice.actions
export default userSlice.reducer;