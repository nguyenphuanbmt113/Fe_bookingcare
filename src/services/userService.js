import axios from "../axios";
const handleLogin = (email, password) => {
  return axios.post("api/v1/login", {
    email,
    password,
  });
};
const handleGetAllUser = () => {
  return axios.get("api/v1/user/all");
};
const createNewUser = (data) => {
  return axios.post("api/v1/user/create", {
    ...data,
  });
};
const deleteUser = (id) => {
  return axios.delete("api/v1/user/delete", { data: { id: id } });
};
const updateUser = (data) => {
  return axios.put("api/v1/user/update", { data });
};
const getAllcodesBytype = (type) => {
  return axios.get(`api/v1/allcodes?type=${type}`);
};
const getTopDoctorHome = (limit) => {
  return axios.get(`api/v1/top-doctor-home?limit=${limit}`);
};
const getAllDoctor = () => {
  return axios.get(`api/v1/doctor-all`);
};
const saveInfoDoctor = (data) => {
  return axios.post(`api/v1/create-info-doctor`, data);
};
const geteDetailInfoDoctor = (id) => {
  return axios.get(`api/v1/get-detail-doctor-by-id?id=${id}`);
};
const getSchedulebyDate = (doctorId, date) => {
  return axios.get(
    `api/v1/schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`
  );
};
const saveBulkDoctor = (data) => {
  return axios.post(`api/v1/bulk-create-schedule`, { data });
};

export {
  handleLogin,
  handleGetAllUser,
  createNewUser,
  deleteUser,
  updateUser,
  getAllcodesBytype,
  getTopDoctorHome,
  getAllDoctor,
  saveInfoDoctor,
  geteDetailInfoDoctor,
  saveBulkDoctor,
  getSchedulebyDate,
};
