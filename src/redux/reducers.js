import {ADD_NUMBER, ASYNC_ADD_NUMBER, GET_NUMBER, RESET_NUMBER} from "./actions";

const initialState = {
    number: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
        case ASYNC_ADD_NUMBER:
            return {
                ...state,
                number: state.number + action.payload,
            }

        case GET_NUMBER:
            return {
                ...state,
                number: state.number - action.payload,
            }

        case RESET_NUMBER:
            return {
                ...state,
                number: 0,
            }

        default:
            return state
    }
}