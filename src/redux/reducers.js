const defaultState = {
    users: [],
    count: 0,
}

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const SET_USERS = "SET_USERS"

export const ASYNC_INCREMENT = "ASYNC_INCREMENT"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"
export const ASYNC_SET_USERS = "ASYNC_SET_USERS"

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}

        case SET_USERS:
            return {...state, users: action.payload}
    }
    return state
}

export const incrementCreator = () => ({type: INCREMENT})
export const decrementCreator = () => ({type: DECREMENT})
export const setUsers = (payload) => ({type: SET_USERS, payload})

export const asyncIncrementCreator = () => ({type: ASYNC_INCREMENT})
export const asyncDecrementCreator = () => ({type: ASYNC_DECREMENT})
export const asyncSetUsersCreator = () => ({type: ASYNC_SET_USERS})
