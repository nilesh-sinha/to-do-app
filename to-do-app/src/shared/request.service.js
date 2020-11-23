import axios from "axios";
import { endpointURL } from "./utilities";

export function getUser(user) {
  let uri = endpointURL + "/user";
  return axios.get(uri, {
    params: {
      user: user,
    },
  });
}

export function getTodoList(user) {
  let uri = endpointURL + "/todo";
  return axios.get(uri, {
    params: {
      user: user,
    },
  });
}
export function addTodo(payload) {
  let uri = endpointURL + "/todo/add";
  return axios.post(uri, payload);
}
export function updateTodo(payload) {
  let uri = endpointURL + "/todo/update";
  return axios.post(uri, payload);
}
export function deleteTodo(id) {
  let uri = endpointURL + "/todo/delete/";
  return axios.post(uri, { id: id });
}
