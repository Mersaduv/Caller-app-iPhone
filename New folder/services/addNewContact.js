import http from "./httpService";

export function addNewContact(userValue) {
  return http.post("/contacts", userValue);
}
