import * as constants from "../constants/Auth";

const initialState = {
  loading: false,
  signUpLoading: false,
  signUpSuccess: false,
  signUpMessage: "",
  verifyAccountFinish: false,
  verifyAccountSuccess: false,
  verifyAccountMessage: "",
  signInLoading: false,
  signInSuccess: false,
  signInMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.SIGNIN_START:
      return {
        ...state,
        signInLoading: true,
        signInSuccess: false,
      };
    case constants.SIGNIN_SUCCESS:
      return {
        ...state,
        signInLoading: false,
        signInSuccess: true,
        signInMessage: action.payload,
      };
    case constants.SIGNIN_ERROR:
      return {
        ...state,
        signInLoading: false,
        signInSuccess: false,
        signInMessage: action.payload,
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
    case constants.VERIFY_ACCOUNT_START:
      return {
        ...state,
        verifyAccountFinish: false,
        verifyAccountSuccess: false,
      };

    case constants.VERIFY_ACCOUNT_SUCCESS:
      return {
        ...state,
        verifyAccountFinish: true,
        verifyAccountSuccess: true,
        verifyAccountMessage: action.payload,
      };
    case constants.VERIFY_ACCOUNT_ERROR:
      return {
        ...state,
        verifyAccountFinish: true,
        verifyAccountSuccess: false,
        verifyAccountMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
