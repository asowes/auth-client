import { axiosRequest } from "@asow/core/helper";
import { BASE_URL } from "./index";

export function registerUser(data) {
  return axiosRequest(`${BASE_URL}/register/user`, "post", data);
}

export function login(data) {
  return axiosRequest(`${BASE_URL}/login`, "post", data);
}
