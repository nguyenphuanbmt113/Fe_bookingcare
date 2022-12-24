const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",

  //changelanguage
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  //gender
  FETCH_GENDER_START: "FETCH_GENDER_START",
  FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
  FETCH_GENDER_FAIL: "FETCH_GENDER_FAIL",

  //position
  FETCH_POSITION_SUCCESS: "FETCH_POSITION_SUCCESS",
  FETCH_POSITION_FAIL: "FETCH_POSITION_FAIL",
  //role
  FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
  FETCH_ROLE_FAIL: "FETCH_ROLE_FAIL",

  //user
  // FETCH_USER_START: "FETCH_USER_START",
  FETCH_CREATE_USER_SUCCESS: "FETCH_CREATE_USER_SUCCESS",
  FETCH_CREATE_USER_FAIL: "FETCH_CREATE_USER_FAIL",

  //FETCH ALL USER
  FETCH_ALLUSER_SUCCESS: "FETCH_ALLUSER_SUCCESS",
  FETCH_ALLUSER_FAIL: "FETCH_ALLUSER_FAIL",

  //  fetch Update USER
  FETCH_UPDATEUSER_SUCCESS: "FETCH_UPDATEUSER_SUCCESS",
  FETCH_UPDATEUSER_FAIL: "FETCH_UPDATEUSER_FAIL",

  //fetchDoctor Top
  FETCH_TOPDOCTOR_SUCCESS: "FETCH_TOPDOCTOR_SUCCESS",
  FETCH_TOPDOCTOR_FAIL: "FETCH_TOPDOCTOR_FAIL",

  //ALL DOCTOR
  FETCH_ALLDOCTOR_SUCCESS: "FETCH_ALLDOCTOR_SUCCESS",
  FETCH_ALLDOCTOR_FAIL: "FETCH_ALLDOCTOR_FAIL",
  //INFO DOCTOR

  FETCH_INFODOCTOR_SUCCESS: "FETCH_INFODOCTOR_SUCCESS",
  FETCH_INFODOCTOR_FAIL: "FETCH_INFODOCTOR_FAIL",
});

export default actionTypes;
