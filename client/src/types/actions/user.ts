export const SET_USER_INFO = "SET_USER_INFO";
export const USER_LOGOUT = "USER_LOGOUT";
export const OPEN_MENU = "OPEN_MENU";

export interface SetUserInfo {
  type: typeof SET_USER_INFO;
  id: string;
  token: string;
}

export interface Logout {
  type: typeof USER_LOGOUT;
}

export interface OpenMenu {
  type: typeof OPEN_MENU;
}

export type UserActionTypes = SetUserInfo | Logout | OpenMenu;
