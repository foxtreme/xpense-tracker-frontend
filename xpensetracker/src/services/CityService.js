import axios from "axios";
import {BASE_URL, CITY_URL} from "../utils/Constants";

const url = BASE_URL+CITY_URL

export const getCities = () => {
    return axios.get(`${url}/all`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const getCity = (id) => {
    return axios.get(`${url}/details/${id}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const postCity = (document) => {
    return axios.post(`${url}/create`, document, {headers: { 'Content-Type': 'application/json'}}).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const putCity = (document, id) => {
    return axios.put(`${url}/update/${id}`, document, {headers: { 'Content-Type': 'application/json'}}).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const deleteCity = (id) => {
    return axios.delete(`${url}/delete/${id}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}