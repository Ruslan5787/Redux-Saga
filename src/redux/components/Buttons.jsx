import React from "react";
import {useDispatch} from "react-redux";
import {
    incrementCreator,
    decrementCreator,
    setUsers,
    asyncIncrementCreator,
    asyncDecrementCreator,
    asyncSetUsersCreator
} from "../reducers";

export function Buttons() {
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(asyncSetUsersCreator())}>Add users</button>
            <button onClick={() => dispatch(asyncIncrementCreator())}>Add number</button>
            <button onClick={() => dispatch(asyncDecrementCreator())}>Get number</button>
        </>
    );
}
