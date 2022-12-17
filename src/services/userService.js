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
export { handleLogin, handleGetAllUser, createNewUser, deleteUser };
