export const SET_USER_INFO = "GET_USER_INFO";
export const USER_LOGOUT = "USER_LOGOUT";

export interface SetUserInfo {
  type: typeof SET_USER_INFO;
  id: string;
  token: string;
}

export interface Logout {
  type: typeof USER_LOGOUT;
}

export type UserActionTypes = SetUserInfo | Logout;
