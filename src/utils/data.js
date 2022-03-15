import axios from "axios";


export async function getData(url, endpoint) {
  let response = await axios.get(`${url}${endpoint}`);
  return response.data;
}