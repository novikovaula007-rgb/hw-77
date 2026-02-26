import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {IMessage, IMessageMutation} from "../../types";
import {axiosAPI} from "../../axiosAPI.ts";
import type {RootState} from '../../../app/store/store.ts';

interface messagesState {
    messages: IMessage[],
    loading: boolean
}

const initialState: messagesState = {
    messages: [],
    loading: false
}

export const fetchAllMessages = createAsyncThunk<IMessage[], string | undefined>(
    'messages/fetchAllMessages', async () => {
        const response = await axiosAPI.get<IMessage[]>('/messages');
        return response.data;
    }
);

export const sendMessage = createAsyncThunk<void, IMessageMutation>(
    'messages/sendMessage',
    async (messageData) => {
        const formData = new FormData();

        const keys = Object.keys(messageData) as (keyof IMessageMutation)[];
        keys.forEach(key => {
            const value = messageData[key];

            if (value !== null) {
                formData.append(key, value);
            }
        });

        await axiosAPI.post<IMessage>('/messages', formData);
    }
);

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllMessages.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllMessages.fulfilled, (state, {payload: items}) => {
                state.loading = false;
                state.messages = items;

            })
            .addCase(fetchAllMessages.rejected, (state) => {
                state.loading = false;
            })
    }
})

export const selectAllMessages = (state: RootState) => state.messages.messages;
export const selectMessagesLoading = (state: RootState) => state.messages.loading;

export const messagesReducer = messagesSlice.reducer;