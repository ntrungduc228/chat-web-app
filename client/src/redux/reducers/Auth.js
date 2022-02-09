import * as constants from "../constants/Auth";

const initialState = {
  loading: false,
  signUpLoading: false,
  signUpSuccess: false,
  signUpMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.SIGNUP_START:
      return {
        ...state,
        signUpLoading: true,
        signUpSuccess: false,
      };
    case constants.SIGNUP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: true,
      };
    case constants.SIGNUP_ERROR:
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: false,
        signUpMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
