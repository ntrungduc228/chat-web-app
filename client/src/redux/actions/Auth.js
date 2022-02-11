import * as constants from "../constants/Auth";
import { createNewAccount, verifyAccount } from "../../services/auth";
import { selectErrorMessage } from "../../utils/error";
import Toast from "../../components/Toast";

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
      let errorMessages = selectErrorMessage(err);
      Toast({
        messages: errorMessages,
        type: "error",
        position: "bottom-center",
      });

      dispatch(signUpError(errorMessages));
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
      dispatch({ type: constants.SIGNUP_START });
      let response = await verifyAccount(data);
      console.log("dataaaaa", response);

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
