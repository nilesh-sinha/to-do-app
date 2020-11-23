import { ActionTypes } from "./actionTypes";

export const FetchList = (content) => ({
  type: ActionTypes.FetchList,
  payload: { content },
});

export const GetUserName = (user) => ({
  type: ActionTypes.GetUserName,
  payload: { user },
});

export const UpdateStatus = (statusCode) => ({
  type: ActionTypes.UpdateStatus,
  payload: { statusCode },
});
