import { getAllcodesBytype } from "../../services/userService";
import actionTypes from "./actionTypes";
//getAllcodesBytype
//start //doing //end
export const fetchGenderBegin = () => ({
  type: actionTypes.FETCH_GENDER_START,
});
export const fetchGenderSuceess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});
export const fetchRoleSuceess = (genderData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: genderData,
});
export const fetchRoleFail = () => ({
  type: actionTypes.FETCH_ROLE_FAIL,
});
export const fetchPositionSuceess = (genderData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: genderData,
});
export const fetchPositionFail = () => ({
  type: actionTypes.FETCH_POSITION_FAIL,
});

//actions gender
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    dispatch(fetchGenderBegin());
    try {
      setTimeout(async () => {
        let res = await getAllcodesBytype("gender");
        console.log("res", res);
        if (res?.data.EC === 0) {
          dispatch(fetchGenderSuceess(res?.data?.DT));
        } else {
          dispatch(fetchGenderFail());
        }
      }, 2000);
    } catch (error) {
      dispatch(fetchGenderFail());
      console.log(">>checek err:", error);
    }
  };
};
//role actions
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      setTimeout(async () => {
        let res = await getAllcodesBytype("role");
        console.log("res", res);
        if (res?.data.EC === 0) {
          dispatch(fetchRoleSuceess(res?.data?.DT));
        } else {
          fetchGenderFail();
        }
      }, 1000);
    } catch (error) {
      dispatch(fetchRoleFail());
      console.log(">>checek err:", error);
    }
  };
};
//position actions
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      setTimeout(async () => {
        let res = await getAllcodesBytype("position");
        console.log("res", res);
        if (res?.data.EC === 0) {
          dispatch(fetchPositionSuceess(res?.data?.DT));
        } else {
          dispatch(fetchPositionFail());
        }
      }, 2000);
    } catch (error) {
      dispatch(fetchPositionFail());
      console.log(">>checek err:", error);
    }
  };
};
