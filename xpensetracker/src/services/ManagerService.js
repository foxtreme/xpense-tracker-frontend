import axios from "axios";
import {BASE_URL, MANAGER_URL} from "../utils/Constants";

const url = BASE_URL+MANAGER_URL

export const getManagers = () => {
    return axios.get(`${url}/all`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const getManagersInCity = city => {
    return axios.get(`${url}/all/city?city=${city}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const getManagersWithExpenses = () => {
    return axios.get(`${url}/all/expenses`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const getManager = id => {
    return axios.get(`${url}/details/${id}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const getManagerByName = name => {
    return axios.get(`${url}/details/name?name=${name}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const postManager = (document) => {
    return axios.post(`${url}/create`, document, {headers: { 'Content-Type': 'application/json'}}).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const putManager = (document, id) => {
    return axios.put(`${url}/update/${id}`, document, {headers: { 'Content-Type': 'application/json'}}).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const deleteManager = (id) => {
    return axios.delete(`${url}/delete/${id}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}