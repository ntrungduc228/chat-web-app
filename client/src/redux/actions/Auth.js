import * as constants from "../constants/Auth";
import { createNewAccount } from "../../services/auth";
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
      // console.log("check response", response);
      if (response && response.data && response.data.success) {
        Toast({
          messages: response.data.message,
          type: "success",
          position: "bottom-center",
        });
        dispatch({ type: constants.SIGNUP_SUCCESS });
      } else {
        let errorMessages = selectErrorMessage(response);
        Toast({
          messages: errorMessages,
          type: "error",
          position: "bottom-center",
        });
        dispatch({
          type: constants.SIGNUP_ERROR,
          payload: errorMessages,
        });
      }
    } catch (err) {
      console.log("err", err);
      let errorMessages = selectErrorMessage(err);
      Toast({
        messages: errorMessages,
        type: "error",
        position: "bottom-center",
      });
      dispatch({
        type: constants.SIGNUP_ERROR,
        payload: errorMessages,
      });
    }
  };
};
