import { createSlice } from "@reduxjs/toolkit"

const initData = {
    data: [],
}

const ChatSlice = createSlice({
    name: 'chat',
    initialState: initData,
    reducers: {
        addChat: (state, action) => {
            
        }
    }
})

export const { addChat } = ChatSlice.actions;

export default ChatSlice.reducer;