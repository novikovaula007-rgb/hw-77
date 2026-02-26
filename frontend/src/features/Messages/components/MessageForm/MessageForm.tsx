import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import {Box, Button, Stack} from "@mui/material";
import {useState} from "react";
import * as React from "react";
import type {IMessageMutation} from "../../../../../types";
import FileInput from "../../../../components/UI/FileInput/FileInput.tsx";

const MessageForm = () => {
    const [form, setForm] = useState<IMessageMutation>(
        {
            message: '',
            author: '',
            image: null
        }
    )

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {...prevState, [name]: value}
        })
    };

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
    };

    const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        if (files) {
            setForm(prevState => ({
                ...prevState, [name]: files[0]
            }));
        }
    };
    return (
        <Box component="form" sx={{maxWidth: 450, mx: 'auto', mt: 4}} onSubmit={onSubmitHandler}>
            <Stack spacing={2}>
                <TextField
                    id="author"
                    name="author"
                    multiline
                    placeholder="Enter your name"
                    value={form.author}
                    onChange={inputChangeHandler}
                />

                <TextField
                    id="message"
                    name="message"
                    multiline
                    placeholder="Enter your message"
                    value={form.message}
                    onChange={inputChangeHandler}
                />

                <FileInput onChange={fileInputChangeHandler} name='image' label='image'/>

                <Button variant="contained"
                        type="submit"
                        color="primary"
                        sx={{marginLeft: '10px'}}
                >
                    <SendIcon/>
                </Button>
            </Stack>
        </Box>
    );
};

export default MessageForm;