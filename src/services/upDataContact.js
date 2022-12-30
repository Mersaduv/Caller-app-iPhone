import http from "./httpService";

export default function upDataContact(id, data) {
  return http.put(`/contacts/${id}`, data);
}
