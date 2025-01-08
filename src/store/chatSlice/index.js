import { createSlice } from "@reduxjs/toolkit"
import {v4 as uuidv4 } from 'uuid';

const initData = {
    data: [],
}


/*

data: [
    {
        id: 1,
        title: "abc",
        messages: [
            {
                id: 1,
                text: 'What ....',
                isBot: false
            },
            {
                id: 2,
                text: 'Why ....',
                isBot: true
            }
        ]
    }
]

*/

const ChatSlice = createSlice({
    name: 'chat',
    initialState: initData,
    reducers: {
        addChat: (state, action) => {
            state.data.push({
                id: uuidv4(),
                title: 'Chat',
                messages: []
            })
        },
        removeChat: (state, action) => {
            state.data = state.data.filter(chat => chat.id !== action.payload)
        },
    }
})

export const { addChat, removeChat } = ChatSlice.actions;

export default ChatSlice.reducer;