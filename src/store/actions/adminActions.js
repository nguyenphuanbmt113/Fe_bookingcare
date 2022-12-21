import { getAllcodesBytype, createNewUser } from "../../services/userService";
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
//user
export const fetchUserSuceess = () => ({
  type: actionTypes.FETCH_USER_SUCCESS,
});
export const fetchUserFail = () => ({
  type: actionTypes.FETCH_USER_FAIL,
});

//actions gender
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    dispatch(fetchGenderBegin());
    try {
      let res = await getAllcodesBytype("gender");
      if (res?.data.EC === 0) {
        dispatch(fetchGenderSuceess(res?.data?.DT));
      } else {
        dispatch(fetchGenderFail());
      }
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
      let res = await getAllcodesBytype("role");
      console.log("res", res);
      if (res?.data.EC === 0) {
        dispatch(fetchRoleSuceess(res?.data?.DT));
      } else {
        fetchGenderFail();
      }
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
      let res = await getAllcodesBytype("position");

      if (res?.data.EC === 0) {
        dispatch(fetchPositionSuceess(res?.data?.DT));
      } else {
        dispatch(fetchPositionFail());
      }
    } catch (error) {
      dispatch(fetchPositionFail());
      console.log(">>checek err:", error);
    }
  };
};
//user action
export const fetchUser = (data) => {
  return async (dispatch, getState) => {
    try {
      const res = await createNewUser(data);
      console.log("check user hahahhahahahres", res)
      if (res?.data?.EC === 0) {
        dispatch(fetchUserSuceess());
      } else {
        dispatch(fetchUserFail());
      }
    } catch (error) {
      console.log(">>check erroe:", error);
    }
  };
};
