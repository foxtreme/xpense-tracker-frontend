import axios from "axios";
import {BASE_URL, EXPENSE_URL} from "../utils/Constants";

const url = BASE_URL+EXPENSE_URL;

export const getExpenses = () => {
    return axios.get(`${url}/all`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const getExpense = id => {
    return axios.get(`${url}/details/${id}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const getExpensesByFrequency = frequency => {
    return axios.get(`${url}/details/frequency?frequency${frequency}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const getExpensesByType = type => {
    return axios.get(`${url}/details/type?type${type}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const postExpense = (document) => {
    return axios.post(`${url}/create`, document, {headers: { 'Content-Type': 'application/json'}}).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const putExpense = (document, id) => {
    return axios.put(`${url}/update/${id}`, document, {headers: { 'Content-Type': 'application/json'}}).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}

export const deleteExpense = (id) => {
    return axios.delete(`${url}/delete/${id}`).then(response => {
        return  response["data"]
    }).catch( error => {
        return error
    })
}