import { HOST } from "../constants/ApiUrls";
import axios from "axios";

export const ApiClient = axios.create({
    baseURL:HOST
})