import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api"
});

const insertUser = (payload) => api.post(`/users`, payload);
const getAllUsers = () => api.get(`/users`);
const updateUserByEmail = (email, payload) =>
  api.put(`/users/${email}`, payload);
const deleteUserById = (id) => api.delete(`/users/${id}`);
const getUserById = (id) => api.get(`/users/${id}`);
const exportData = () => api.get(`/export`);

const AjaxUtils = {
  insertUser,
  getAllUsers,
  updateUserByEmail,
  deleteUserById,
  getUserById,
  exportData
};

export default AjaxUtils;
