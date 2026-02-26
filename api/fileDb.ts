import {IMessage, IMessageMutation} from "./types";
import crypto from "crypto";
import {promises as fs} from "fs";

const fileName = './db.json';

let data: IMessage[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },

    async getMessages () {
        return data;
    },

    async addMessage (item: IMessageMutation) {
        const id = crypto.randomUUID();
        const newMessage = {id: id, ...item};
        data.push(newMessage);
        await this.save();
        return newMessage;
    },

    async save() {
        return fs.writeFile(fileName, JSON.stringify(data));
    }
};