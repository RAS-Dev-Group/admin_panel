import axios from "axios";

const BASE_URL = 'https://furniture-dusky.vercel.app/';

export const token = '';
export const api = axios.create({
  baseURL: BASE_URL
});

function authConfig() {
  return { headers: { Authorization: `Bearer ${cookies.token}` } };
}

async function post(cb, url, data = {}, withToken = true) {
  const formData = new FormData;
  Object.keys(data).forEach(key => {
    formData.append(key, data[key])
  });
  try {
    const res = await api.post(url, formData, withToken ? authConfig() : {});
    return res;
  } catch (err) {
    return null;
  }
}

function get(url, data = {}, withToken = true) {
  api.get(url, data, withToken ? authConfig() : {})
    .then(res => {
    })
    .catch(err => {
    });
}

function put(url, data = {}) {
  api.put(url, data, authConfig());
}

function do_delete(url, data = {}) {
  api.delete(url, data, authConfig());
}

export const getToken = function () {

}

export const destroyToken = function () {
  
}

export const login = function (data) {
  return post('token', data, false);
}

export const signUp = function (data) {
  return post('create-user', data, false);
}

export const refresh = function () {
  const resp = post('refresh');
}

export const createProject = function (data) {
  return post('project', data, token);
}

export const getProjects = function () {
  return get('projects', data, token);
}

export const updateProject = function (id, data) {
  return put(`project/${id}`, data);
}

export const deleteProject = function (id) {
  return do_delete(`project/${id}`);
}

export const addTask = function (projectId, taskData) {
  return post(`project/${projectId}/task`, taskData);
}

export const assignTask = function (projectId, taskId, userId) {
  return put(`project/${projectId}/task/${taskId}`, { user_id: userId });
}

export const updateTask = function (taskId, taskData) {
  return put(`task/${taskId}`, taskData);
}

export const getProjectsByDate = function (date) {
  return get(`project/${date}`);
}

export const getWarehouses = function () {
  return get('warehouses');
}

export const getWarehouse = function (id) {
  return get(`warehouses/${id}`);
}

export const updateWarehouse = function (id, data) {
  return put(`warehouses/${id}`, data);
}

export const deleteWarehouse = function (id) {
  return do_delete(`warehouses/${id}`);
}

export const createInventory = function (data) {
  return post('inventory', data);
}

export const getInventory = function (id) {
  return get(`inventory/${id}`);
}

export const updateInventory = function (id, data) {
  return update(`inventory/${id}`, data);
}

export const deleteInventory = function (id) {
  return do_delete(`inventory/${id}`);
}

export const getInventories = function () {
  return get('inventories');
}

export const getSuppliers = function () {
  return get('suppliers');
}

export const createSupplier = function (data) {
  return post('suppliers', data);
}

export const updateSupplier = function (id, data) {
  return put(`suppliers/${id}`, data);
}

export const deleteSupplier = function (id) {
  return do_delete(`suppliers/${id}`);
}

export const exportSuppliers = function () {
  return get(`suppliers/export`);
}
