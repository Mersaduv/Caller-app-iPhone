import http from "./httpService";

export function getOneContact(id) {
  return http.get(`/contacts/${id}`);
}
