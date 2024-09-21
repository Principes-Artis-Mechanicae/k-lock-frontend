import axios from "axios";

export const API_BASE_URL = "http://localhost:39253";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
