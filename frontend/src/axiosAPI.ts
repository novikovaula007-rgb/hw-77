import axios from "axios";
import {apiURL} from "./globalConstants.ts";

export const axiosAPI = axios.create({
    baseURL: apiURL
})