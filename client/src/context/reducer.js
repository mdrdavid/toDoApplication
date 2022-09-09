import { 
    ADD_TODO,
    ADD_TODO_ERROR, 
    DELETE_TODO, 
    DELETE_TODO_ERROR, 
    GET_TODO, 
    GET_TODO_ERROR } from "./actionTypes";

export const todoInitialState = {
    todos: [],
    error: '',
    todo: null,
    successMessage: ''
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload
            }

        case ADD_TODO_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_TODO:
            return {
                ...state,
                todos: action.payload
            }

        case GET_TODO_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                successMessage: action.payload
            }

        case DELETE_TODO_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer