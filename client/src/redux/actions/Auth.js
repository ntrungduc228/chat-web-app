import * as constants from "../constants/Auth";
import {
  createNewAccount,
  verifyAccount,
  signInAccount,
} from "../../services/auth";
import { selectErrorMessage } from "../../utils/error";
import Toast from "../../components/Toast";
import LocalService from "../../services/local";

export const showLoading = () => ({
  type: constants.SHOW_LOADING,
});

export const signUpStart = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: constants.SIGNUP_START });
      let response = await createNewAccount(data);

      if (response && response.data && response.data.success) {
        Toast({
          messages: response.data.message,
          type: "success",
          position: "bottom-center",
        });
        dispatch(signUpSuccess());
      } else {
        let errorMessages = selectErrorMessage(response);
        Toast({
          messages: errorMessages,
          type: "error",
          position: "bottom-center",
        });

        dispatch(signUpError(errorMessages));
      }
    } catch (err) {
      console.log("err", err);
      Toast({
        messages: "Server Error. Please contact our administrator!",
        type: "error",
        position: "bottom-center",
      });

      dispatch(signUpError("Server Error!"));
    }
  };
};

export const signUpSuccess = (data) => ({
  type: constants.SIGNUP_SUCCESS,
  payload: data,
});

export const signUpError = (data) => ({
  type: constants.SIGNUP_ERROR,
  payload: data,
});

export const verifyAccountStart = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: constants.VERIFY_ACCOUNT_START });
      let response = await verifyAccount(data);

      if (response && response.data && response.data.success) {
        Toast({
          messages: response.data.message,
          type: "success",
        });
        dispatch(verifyAccountSuccess(response.data.message));
      } else {
        let errorMessages = selectErrorMessage(response);
        Toast({
          messages: errorMessages,
          type: "error",
        });

        dispatch(verifyAccountError(errorMessages));
      }
    } catch (err) {
      console.log("err", err);
      Toast({
        messages: "Server Error. Please contact our administrator!",
        type: "error",
      });

      dispatch(verifyAccountError("Server Error!"));
    }
  };
};

export const verifyAccountSuccess = (data) => ({
  type: constants.VERIFY_ACCOUNT_SUCCESS,
  payload: data,
});

export const verifyAccountError = (data) => ({
  type: constants.VERIFY_ACCOUNT_ERROR,
  payload: data,
});

export const signInStart = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: constants.SIGNIN_START });

      let response = await signInAccount(data);
      console.log("response", response);
      if (response && response.data && response.data.success) {
        if (response.data.token) {
          if (response.data.token.accessToken) {
            LocalService.setAccessToken(response.data.token.accessToken);
          }

          if (response.data.token.refreshToken) {
            LocalService.setRefreshToken(response.data.token.refreshToken);
          }

          if (response.data.user) {
            LocalService.setUserData(response.data.user);
          }
        }

        Toast({
          messages: response.data.message,
          type: "success",
        });
        dispatch(signInSuccess(response.data.message));
      } else {
        let errorMessages = selectErrorMessage(response);
        Toast({
          messages: errorMessages,
          type: "error",

          position: "bottom-center",
        });

        dispatch(signInError(errorMessages));
      }
    } catch (err) {
      console.log("err signIn ", err);

      Toast({
        messages: "Server Error. Please contact our administrator!",
        type: "error",

        position: "bottom-center",
      });
      dispatch(signInError("Server Error. Please contact our administrator!"));
    }
  };
};

export const signInSuccess = (data) => ({
  type: constants.SIGNIN_SUCCESS,
  payload: data,
});

export const signInError = (data) => ({
  type: constants.SIGNIN_ERROR,
  payload: data,
});
