import React from "react";
import {useSelector} from "react-redux";

export function Count() {
    const users = useSelector(state => state.users)
    const count = useSelector(state => state.count)

    return <>
        <div>{count}</div>
        <div>
            {users.map(user =>
                <div key={user.id}>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                </div>
            )}
        </div>
    </>;
}
