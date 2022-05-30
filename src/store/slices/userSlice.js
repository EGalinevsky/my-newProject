import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    displayName: null
}

const useSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.displayName = action.payload.displayName;
         },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.displayName = null;
        }
    }
})

export const {setUser, removeUser} = useSlice.actions

export default useSlice.reducer