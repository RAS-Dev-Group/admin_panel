import axios from "axios";

const BASE_URL = 'https://furniture-dusky.vercel.app/';

export const api = axios.create({
  baseURL: BASE_URL
});

function authConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function post(url, data = {}, token = '') {
  return new Promise((resolve, reject) => {
    const formData = new FormData;
    Object.keys(data).forEach(key => {
      formData.append(key, data[key])
    });
    api.post(url, formData, token ? authConfig(token) : {})
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function get(url, token, data) {
  console.log(authConfig(token));
  return new Promise((resolve, reject) => {
    api.get(url, data, authConfig(token))
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    });
  });
}

function put(url, data, token) {
  return new Promise((resolve, reject) => {
    api.put(url, data, authConfig(token))
    .then(res => { 
      resolve(res);
    })
    .catch(err => { 
      reject(err); 
    });
  });
}

function do_delete(url, token, data) {
  return new Promise((resolve, reject) => {
    api.delete(url, data, authConfig(token))
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    });
  });
}

export const login = function (data) {
  return post('token', data);
}

export const signUp = function (data) {
  return post('create-user', data);
}

export const refresh = function (token) {
  const resp = post('refresh');
}

export const createProject = function (data) {
  return post('project', data, token);
}

export const getProjects = function (token) {
  return get('projects', token);
}

export const updateProject = function (token, id, data) {
  return put(`project/${id}`, data, token);
}

export const deleteProject = function (token, id) {
  return do_delete(`project/${id}`, token);
}

export const addTask = function (token, projectId, taskData) {
  return post(`project/${projectId}/task`, taskData, token);
}

export const assignTask = function (token, projectId, taskId, userId) {
  return put(`project/${projectId}/task/${taskId}`, { user_id: userId },  token);
}

export const updateTask = function (taskId, taskData) {
  return put(`task/${taskId}`, taskData, token);
}

export const getProjectsByDate = function (token, date) {
  return get(`project/${date}`, token);
}

export const getWarehouses = function (token) {
  return get('warehouses', token);
}

export const getWarehouse = function (token, id) {
  return get(`warehouses/${id}`, token);
}

export const updateWarehouse = function (token, id, data) {
  return put(`warehouses/${id}`, data, token);
}

export const deleteWarehouse = function (token, id) {
  return do_delete(`warehouses/${id}`, token);
}

export const createInventory = function (token, data) {
  return post('inventory', data, token);
}

export const getInventory = function (token, id) {
  return get(`inventory/${id}`, token);
}

export const updateInventory = function (token, id, data) {
  return update(`inventory/${id}`, data, token);
}

export const deleteInventory = function (token, id) {
  return do_delete(`inventory/${id}`, token);
}

export const getInventories = function (token) {
  return get('inventories', token);
}

export const getSuppliers = function (token) {
  return get('suppliers', token);
}

export const createSupplier = function (token, data) {
  return post('suppliers', data, token);
}

export const updateSupplier = function (token, id, data) {
  return put(`suppliers/${id}`, data, token);
}

export const deleteSupplier = function (token, id) {
  return do_delete(`suppliers/${id}`, token);
}

export const exportSuppliers = function (token) {
  return get(`suppliers/export`, token);
}
