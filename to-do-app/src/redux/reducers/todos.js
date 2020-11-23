import { ActionTypes } from "../actionTypes";

const initialState = {
  todoList: [],
  user: null,
  updateStatus: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FetchList: {
      const { content } = action.payload;
      return {
        ...state,
        todoList: content,
      };
    }
    case ActionTypes.GetUserName: {
      const { user } = action.payload;
      return {
        ...state,
        user: user,
      };
    }
    case ActionTypes.UpdateStatus: {
      const { status } = action.payload;
      return {
        ...state,
        updateStatus: status,
      };
    }
    default:
      return state;
  }
}
