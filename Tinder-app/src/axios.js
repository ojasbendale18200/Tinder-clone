import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder--backenddd.herokuapp.com",
});

export default instance;
