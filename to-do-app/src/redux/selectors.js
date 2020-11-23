export const getTodosState = (store) => store.todos;

export const getTodoList = (store) =>
  getTodosState(store) ? getTodosState(store).todoList : [];

export const getUser = (store) => getTodosState(store).user;
export const getUpdateStatus = (store) => getTodosState(store).updateStatus;
