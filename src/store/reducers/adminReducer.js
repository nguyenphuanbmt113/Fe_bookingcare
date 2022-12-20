import actionTypes from "../actions/actionTypes";

const initialState = {
  genderData: [],
  positionData: [],
  roleData: [],
  isLoadingGender: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      console.log(">>>>Action", action);
      return {
        ...state,
        genderData: action.data,
        isLoadingGender: false,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      return {
        ...state,
        isLoadingGender: true,
      };
    default:
      return state;
  }
};

export default adminReducer;
