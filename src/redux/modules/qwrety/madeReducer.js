import { actionTypes } from "../../../constants/actionTypes";

export const modeReducer = (state = true,action) => {
  switch (action.type) {
    case actionTypes.MAKE_DARK:
      return false;
    case actionTypes.MAKE_LIGHT:
      return true;
    default:
      return state;
  }
};
