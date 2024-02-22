import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    html:"",
    css:"",
    javascript:"",
    currentLanguage:"html"
}

const compilerSlice = createSlice({
    name:"compilerSlice",
    initialState,
    reducers:{
        updateCurrentLanguage:(state, action:PayloadAction<string>) => {// this is to make sure only string is sent as payload
            state.currentLanguage = action.payload
        }
    }
})

export default compilerSlice.reducer;

export const {updateCurrentLanguage} = compilerSlice.actions