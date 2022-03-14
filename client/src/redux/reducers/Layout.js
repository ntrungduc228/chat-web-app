import * as constants from "../constants/Layout";

const initialState = {
  leftSidebarVisible: true,
  rightSidebarVisible: true,
  windowWidth: 0,
  isMobileDevice: true,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LAYOUT_WINDOW_RESIZE:
      if (action.payload < 648) {
        return {
          ...state,
          isMobileDevice: true,
          windowWidth: action.payload,
        };
      }
      return {
        ...state,
        isMobileDevice: false,
        windowWidth: action.payload,
      };

    case constants.LAYOUT_LEFT_SIDEBAR_SHOW:
      return {
        ...state,
        leftSidebarVisible: true,
      };
      case constants.LAYOUT_RIGHT_SIDEBAR_TOGGLE:
      return {
        ...state,
        rightSidebarVisible: !state.rightSidebarVisible,
      };
    case constants.LAYOUT_RIGHT_SIDEBAR_HIDE:
      return {
        ...state,
        rightSidebarVisible: false,
      };

    default:
      return state;
  }
};

export default layoutReducer;
