import axios from "axios";
import {toast} from "react-toastify";

const baseURL = process.env.REACT_APP_API_URI

export const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Не определенная ошибка', {
            toastId: 'ResponseInterceptor'
        })
        return Promise.reject(error);
    },
);