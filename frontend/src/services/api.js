import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5003/api", // Backend running at localhost:5000
});

export default instance;
