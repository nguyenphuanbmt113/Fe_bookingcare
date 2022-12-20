import actionTypes from "../actions/actionTypes";

const initialState = {
  genderData: [],
  positionData: [],
  roleData: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      console.log(">>>>Action", action);
      return {
        ...state,
        genderData: action.data,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
