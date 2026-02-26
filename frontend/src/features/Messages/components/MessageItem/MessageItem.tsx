import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {apiURL} from "../../../../globalConstants.ts";

interface Props {
    author: string,
    message: string,
    image: string | null
}

const MessageItem: React.FC<Props> = ({author, message, image}) => {
    return (
        <Box sx={{border: '1px solid #ccc', borderRadius: '5px', padding: '10px'}}>
            <Stack spacing={2}>
                <Typography>
                    <strong>Author:</strong> {author}
                </Typography>
                <Typography>
                    {message}
                </Typography>
                {image &&  <img
                    style={{width: '200px', height: '150px', objectFit: 'cover'}}
                    src={`${apiURL}/${image}`} alt={message}/>}
            </Stack>
        </Box>
    );
};

export default MessageItem;