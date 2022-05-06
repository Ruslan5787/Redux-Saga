export const ADD_NUMBER = 'ADD_NUMBER'
export const GET_NUMBER = 'GET_NUMBER'
export const RESET_NUMBER = 'RESET_NUMBER'
export const ASYNC_ADD_NUMBER = 'ASYNC_ADD_NUMBER'

export function addNumber() {
    return {
        type: ADD_NUMBER,
        payload: 5,
    }
}

export function getNumber() {
    return {
        type: GET_NUMBER,
        payload: 4,
    }
}

export function resetNumber() {
    return {
        type: RESET_NUMBER
    }
}

export function asyncAddNumber() {
    return {
        type: ASYNC_ADD_NUMBER,
        payload: 1
    }
}
