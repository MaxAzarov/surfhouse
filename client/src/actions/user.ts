import { Dispatch } from "redux";
import {
  UserActionTypes,
  SET_USER_INFO,
  OPEN_MENU,
} from "../types/actions/user";
import { Actions } from "./../types/actions/rootActions";

export const UserLogin = (id: string, token: string): UserActionTypes => ({
  type: SET_USER_INFO,
  id,
  token,
});

export const isAuth = () => (dispatch: Dispatch<UserActionTypes>) => {
  const token: string | null = localStorage.getItem("token");
  const id: string | null = localStorage.getItem("id");
  if (token && id) {
    dispatch(UserLogin(id, token));
  }
};

export const OpenMenu = () => ({
  type: OPEN_MENU,
});

export const Logout = () => (dispatch: Dispatch<Actions>) => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  dispatch(UserLogin("", ""));
};
