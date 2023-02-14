import axios from "axios";

const BASE_URL = 'https://furniture-dusky.vercel.app';

const api = axios.create({
  baseURL: BASE_URL
});

function post(url, data) {
  api.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {

  })
  .catch(err => {

  });
}

export default api;