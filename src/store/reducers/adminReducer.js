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
    case actionTypes.FETCH_ROLE_SUCCESS:
      return {
        ...state,
        roleData: action.data,
      };
    case actionTypes.FETCH_ROLE_FAIL:
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      return {
        ...state,
        positionData: action.data,
      };
    case actionTypes.FETCH_POSITION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
