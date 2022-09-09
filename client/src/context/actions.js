import axios from "axios";

import { URL } from "../components/Constants";
import { GET_TODO, ADD_TODO, GET_TODO_ERROR, ADD_TODO_ERROR, DELETE_TODO, DELETE_TODO_ERROR, UPDATE_TODO, UPDATE_TODO_ERROR } from "./actionTypes";

export const addToDo = (todo) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token")
        const res = await axios({
            method: 'post',
            url: `${URL}/items`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: { todo }
        })

        dispatch({
            type: ADD_TODO,
            payload: res.data
        })
    } catch (error) {
        console.log(error);

        dispatch({
            type: ADD_TODO_ERROR,
            payload: 'unable to add toDo Item'
        })
    }
}

export const getTodos = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token")
        const res = await axios({
            method: 'get',
            url: `${URL}/items`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })

        dispatch({
            type: GET_TODO,
            payload: res.data
        })
    } catch (error) {
        console.log(error);

        dispatch({
            type: GET_TODO_ERROR,
            payload: 'error fetching todo'
        })
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token")
        const res = await axios({
            method: 'delete',
            url: `${URL}/items/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })

        dispatch({
            type: DELETE_TODO,
            payload: 'Todo deleted'
        })
    } catch (error) {
        console.log(error);

        dispatch({
            type: DELETE_TODO_ERROR,
            payload: 'error deleting todo'
        })
    }
}

export const updateToDo = (todo) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token")
        const res = await axios({
            method: 'put',
            url: `${URL}/items/${todo._id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: todo
        })

        dispatch({
            type: UPDATE_TODO,
            payload: res.data
        })
    } catch (error) {
        console.log(error);

        dispatch({
            type: UPDATE_TODO_ERROR,
            payload: 'unable to update toDo Item'
        })
    }
}