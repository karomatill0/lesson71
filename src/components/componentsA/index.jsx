import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { makeDark, makeLight } from '../../redux/modules/mode/modeAction';
import { Button,Tea } from './styled';

function ComponentsA() {
 
     const counter =  useSelector(state => state.counter);
     const mode = useSelector((state)=>state.mode);
    const dispatch =  useDispatch()

    return (
        <div>
            <Tea onClick={()=> dispatch(makeDark())} mode={mode} >
             <h1>this is navbar</h1>
            </Tea> <br />
             {counter} <br />
             {mode?"light mode":"dark mode"} <br />
             <Button onClick={()=> dispatch(makeDark())} mode={mode} > Open Navbar </Button> <br />
             <Button onClick={()=> dispatch(makeLight())} mode={mode} > Closed Navbar </Button>
        </div>
    )
}

export default ComponentsA