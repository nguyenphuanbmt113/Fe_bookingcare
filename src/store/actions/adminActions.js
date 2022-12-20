import { getAllcodesBytype } from "../../services/userService";
import actionTypes from "./actionTypes";
//getAllcodesBytype
//start //doing //end

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
          fetchGenderFail();
        }
      }, 2000);
    } catch (error) {
      dispatch(fetchGenderFail());
      console.log(">>checek err:", error);
    }
  };
};
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
