import {
  FETCH_EXAMPLE_REQUEST,
  FETCH_EXAMPLE_SUCCESS,
  FETCH_EXAMPLE_ERROR,
} from "../constants/postConstant";

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data1: null,
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXAMPLE_REQUEST:
      return {
        ...state,
        requesting: true,
        requesting: false,
        success: true,

        data2: action.data1,
      };
    case FETCH_EXAMPLE_SUCCESS:
      return {
        ...state,
        requesting: false,
        message: action.message,
        data2: action.data1,
      };
    case FETCH_EXAMPLE_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default postReducer;
