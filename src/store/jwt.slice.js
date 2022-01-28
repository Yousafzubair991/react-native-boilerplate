import { createSlice } from '@reduxjs/toolkit'
// import { AsyncStorage } from "react-native"
export const jwtSlice = createSlice({
    name: 'jwt',
    initialState: {
        token: '',
        user_id: '',
    },
    reducers: {
        addJwtToken: (state, action) => {
            state.token = action.payload.token
            state.user_id = action.payload.user_id
        },

    }
})

export const { addJwtToken } = jwtSlice.actions
export default jwtSlice.reducer