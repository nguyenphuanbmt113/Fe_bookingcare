import actionTypes from "../actions/actionTypes";

const initialState = {
  genderData: [],
  positionData: [],
  roleData: [],
  usersData: [],
  isLoadingGender: false,
  idLoadingSave: false,
  topDoctor: [],
  allDoctor: [],
  isCorrectSaveInfo: false,
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
      state.genderData = action.data;
      state.isLoadingGender = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      state.isLoadingGender = false;
      state.genderData = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roleData = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAIL:
      state.roleData = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positionData = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAIL:
      state.roleData = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ALLUSER_SUCCESS:
      state.usersData = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALLUSER_FAIL:
      state.usersData = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_TOPDOCTOR_SUCCESS:
      return {
        ...state,
        topDoctor: action.data,
      };
    case actionTypes.FETCH_TOPDOCTOR_FAIL:
      return {
        topDoctor: [],
        ...state,
      };
    case actionTypes.FETCH_ALLDOCTOR_SUCCESS:
      return {
        ...state,
        allDoctor: action.data,
      };
    case actionTypes.FETCH_ALLDOCTOR_FAIL:
      return {
        ...state,
        allDoctor: [],
      };
    case actionTypes.FETCH_INFODOCTOR_SUCCESS:
      return {
        ...state,
        isCorrectSaveInfo: true,
      };
    case actionTypes.FETCH_INFODOCTOR_FAIL:
      return {
        ...state,
        isCorrectSaveInfo: false,
      };

    default:
      return state;
  }
};

export default adminReducer;
