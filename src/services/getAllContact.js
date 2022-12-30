import http from "./httpService";

export function getAllContact() {
  return http.get("/contacts");
}
