import React from "react";
import {useDispatch} from "react-redux";
import {addNumber, asyncAddNumber, getNumber, resetNumber} from "../redux/actions";
import {fetchNumber} from "../redux/asynActions";

export function Buttons() {
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(addNumber())}>Add</button>
            <button onClick={() => dispatch(getNumber())}>Take</button>
            <button onClick={() => dispatch(resetNumber())}>Reset</button>
            <button onClick={() => dispatch(fetchNumber())}>Async add number</button>
        </>
    );
}
