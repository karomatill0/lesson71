import { actionTypes } from "../../../constants/actionTypes"

export const iCounterAction=()=>({
  type:actionTypes.INCREMENT
})
export const dCounterAction=()=>({
  type:actionTypes.DECREMENT
})
export const addCounterAction=(number)=>({
  type:actionTypes.ADD,
  payload:number
})
export const subsCounterAction=(number)=>({
  type:actionTypes.SUBS,
  payload:number
})