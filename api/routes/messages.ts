import express from "express";
import {fileDb} from "../fileDb";
import {IMessageMutation} from "../types";
import {imagesUpload} from "../multer";

export const messagesRouter = express.Router();

messagesRouter.post('/', imagesUpload.single('image'), async (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({error: "Please enter a message fields"});
    }

    const newMessage: IMessageMutation = {
        message: req.body.message,
        author: req.body.author,
        image: req.file ? 'images/' + req.file.filename : null,
    };

    const savedMessage = await fileDb.addMessage(newMessage);
    return res.send(savedMessage);


})