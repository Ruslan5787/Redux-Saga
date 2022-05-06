import React from "react";
import {useSelector} from "react-redux";

export function Count() {
  const counter = useSelector(state => state.number)

  return <div>{counter}</div>;
}
