import {asyncAddNumber} from "./actions";

export function fetchNumber() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(asyncAddNumber())
        }, 1000)
    }
}