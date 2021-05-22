import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  ACTIVATE_USER,
  ACTIVATE_USER_SUCCESS,
  ACTIVATE_USER_ERROR,
  LOGOUT,
} from "../constants/authConstant";
debugger;
/* const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? {
      loggedIn: true,
      user: user,
      error: null,
      register: null,
      activeUser: false,
      registered: false,
    }
  : {
      loggedIn: false,
      user: null,
      error: null,
      register: null,
      activeUser: false,
      registered: false,
    }; */
const initialState = {
  user: {},
  register: {},
  activeUser: {},
  loggedIn: false,
  registered: false,
  error: null,
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: false,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        error: false,
        user: action.payload.success,
      };

    case LOGIN_ERROR:
      debugger;
      return {
        ...state,
        loggedIn: false,
        error: action.payload.error,
        user: {},
      };

    case REGISTRATION:
      return {
        ...state,
        registered: false,
        error: null,
      };

    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registered: true,
        error: false,
        register: action.payload.success,
      };

    case REGISTRATION_ERROR:
      return {
        ...state,
        registered: false,
        error: action.payload.error,
        register: {},
      };

    case ACTIVATE_USER:
      return {
        ...state,
        registered: false,
        error: null,
      };

    case ACTIVATE_USER_SUCCESS:
      debugger;
      return {
        ...state,
        registered: true,
        error: false,
        activeUser: action.payload.success,
      };

    case ACTIVATE_USER_ERROR:
      debugger;
      return {
        ...state,
        registered: false,
        error: action.payload.error,
        activeUser: {},
      };

    case LOGOUT:
      debugger;
      return {
        ...state,
        loggedIn: false,
        user: null,
        error: false,
      };

    default:
      return state;
  }
}
