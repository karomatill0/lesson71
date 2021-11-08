import React from "react";
import { useDispatch } from "react-redux";
import { addCounterAction, iCounterAction } from "../../redux/modules/counter/counterAction";

function ComponentsB() {
  const dispatch = useDispatch();
  return (
    <div>
      Components b <br />
      <button onClick={() => dispatch(iCounterAction())}>increment</button>
      <button onClick={() => dispatch(addCounterAction(5))}>add</button>
    </div>
  );
}

export default ComponentsB;
