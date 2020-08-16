import { UserActionTypes, SET_USER_INFO } from "../types/actions/user";
import { Actions } from "./../types/actions/rootActions";
import { Dispatch } from "redux";

export const UseLogin = (id: string, token: string): UserActionTypes => ({
  type: SET_USER_INFO,
  id,
  token,
});

export const isAuth = () => (dispatch: Dispatch<UserActionTypes>) => {
  const token: string | null = localStorage.getItem("token");
  const id: string | null = localStorage.getItem("id");
  if (token && id) {
    dispatch(UseLogin(id, token));
  }
};

export const Logout = () => (dispatch: Dispatch<Actions>) => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  dispatch(UseLogin("", ""));
};
