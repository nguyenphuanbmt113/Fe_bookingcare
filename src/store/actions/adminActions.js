import { getAllcodesBytype } from "../../services/userService";
import actionTypes from "./actionTypes";
//getAllcodesBytype
//start //doing //end
// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllcodesBytype("gender");
      console.log("res", res);
      if (res?.data.EC === 0) {
        dispatch(fetchGenderSuceess(res?.data?.DT));
      } else {
        fetchGenderFail();
      }
    } catch (error) {
      dispatch(fetchGenderFail());
      console.log(">>checek err:", error);
    }
  };
};
export const fetchGenderSuceess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});
