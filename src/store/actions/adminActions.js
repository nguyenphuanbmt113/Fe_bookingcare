import {
  getAllcodesBytype,
  createNewUser,
  handleGetAllUser,
  updateUser,
} from "../../services/userService";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
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
export const fetchCreateUserSuceess = () => ({
  type: actionTypes.FETCH_CREATE_USER_SUCCESS,
});
export const fetchCreateUserFail = () => ({
  type: actionTypes.FETCH_CREATE_USER_FAIL,
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
//user create action
export const fetchCreateUser = (data) => {
  return async (dispatch, getState) => {
    try {
      const res = await createNewUser(data);
      if (res?.data?.EC === 0) {
        toast.success(res?.data?.EM);
        dispatch(fetchCreateUserSuceess());
        dispatch(fetchAllUser());
      } else {
        dispatch(fetchCreateUserFail());
      }
    } catch (error) {
      console.log(">>check erroe:", error);
    }
  };
};

//getAlluser
export const fetchAllUserSuceess = (data) => ({
  type: actionTypes.FETCH_ALLUSER_SUCCESS,
  data: data,
});
export const fetchAllUserFail = () => ({
  type: actionTypes.FETCH_ALLUSER_FAIL,
});
export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    try {
      const res = await handleGetAllUser();
      if (res?.data?.EC === 0) {
        let users = res.data?.data.reverse();
        dispatch(fetchAllUserSuceess(users));
      } else {
        dispatch(fetchAllUserFail());
      }
    } catch (error) {
      console.log(">>check erroe:", error);
    }
  };
};

//update action
export const fetchUpdateUserSuceess = () => ({
  type: actionTypes.FETCH_UPDATEUSER_SUCCESS,
});
export const fetchUpdateUserFail = () => ({
  type: actionTypes.FETCH_UPDATEUSER_FAIL,
});
export const fetchUpdateUser = (data) => {
  return async (dispatch, getState) => {
    try {
      const res = await updateUser(data);
      if (res?.data?.EC === 0) {
        toast.success(res?.data?.EM);
        dispatch(fetchUpdateUserSuceess());
        dispatch(fetchAllUser());
      } else {
        dispatch(fetchUpdateUserFail());
      }
    } catch (error) {
      console.log(">>check erroe:", error);
    }
  };
};
