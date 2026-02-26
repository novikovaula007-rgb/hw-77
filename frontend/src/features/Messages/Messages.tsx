import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/store/hooks.ts";
import {fetchAllMessages, selectAllMessages, selectMessagesLoading} from "./MessagesSlice.ts";
import {Container, Grid, Stack} from "@mui/material";
import MessageForm from "./components/MessageForm/MessageForm.tsx";
import MessageItem from "./components/MessageItem/MessageItem.tsx";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const Messages = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectMessagesLoading);
    const messages = useAppSelector(selectAllMessages);

    useEffect(() => {
        dispatch(fetchAllMessages());
    }, [])

    return (
        <Container maxWidth='lg' sx={{mt: 5}}>
            <Grid container>
                <Grid size={6}>
                    <Stack spacing={2}>
                        {loading && <Spinner/>}
                        {!loading && messages.length === 0 && 'There is no messages yet.'}
                        {!loading && messages.length > 0 && messages.map(message => {
                            return <MessageItem
                                key={message.id}
                                author={message.author}
                                message={message.message}
                                image={message.image}
                            />
                        })}
                    </Stack>
                </Grid>
                <Grid size={6}>
                    <MessageForm/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Messages;