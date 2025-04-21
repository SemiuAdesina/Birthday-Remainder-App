import axios from "axios";

const instance = axios.create({
  baseURL: "https://birthday-remainder-app.onrender.com/api"",
});

export default instance;
