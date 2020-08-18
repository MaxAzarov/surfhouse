import {
  UserActionTypes,
  SET_USER_INFO,
  USER_LOGOUT,
  OPEN_MENU,
} from "../types/actions/user";

interface initial {
  id: string;
  token: string;
  isAuth: boolean;
  menu: boolean;
}

const initialState: initial = {
  id: "",
  token: "",
  isAuth: false,
  menu: false,
};

const user = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        id: action.id,
        token: action.token,
        isAuth: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        id: "",
        token: "",
        isAuth: false,
      };

    case OPEN_MENU:
      return {
        ...state,
        menu: !state.menu,
      };
    default:
      return { ...state };
  }
};
export default user;
