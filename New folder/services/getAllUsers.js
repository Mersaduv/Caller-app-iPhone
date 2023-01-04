import http from "./httpService";

export function getAllUsers() {
  return http.get("/users/1");
}
