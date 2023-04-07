import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: ""
}

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        updateUserInfo: (state, payload) => {
            state.username = payload.payload.username
        }
    }
})

export const { updateUserInfo } = userInfoSlice.actions
export default userInfoSlice.reducer;