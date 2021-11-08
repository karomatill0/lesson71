import React from 'react'
import { useDispatch } from 'react-redux';
import { dCounterAction, subsCounterAction } from '../../redux/modules/counter/counterAction';

function ComponentsC() {
    const dispatch = useDispatch();
    return (
        <div>
            Components c <br />
            <button onClick={()=>dispatch(dCounterAction())} >decrement</button>
            <button onClick={()=>dispatch(subsCounterAction(5))} >subtract</button>
        </div>
    )
}

export default ComponentsC
