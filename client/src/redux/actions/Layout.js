import * as constants from "../constants/Layout";

export const doWindowResize = (windowWidth) => ({
  type: constants.LAYOUT_WINDOW_RESIZE,
  payload: windowWidth,
});

export const doShowLeftSidebar = () => ({
  type: constants.LAYOUT_LEFT_SIDEBAR_SHOW,
});

export const doToggleRightSidebar = () => ({
  type: constants.LAYOUT_RIGHT_SIDEBAR_TOGGLE,
});

export const doHideRightSidebar = () => {
  return {
    type: constants.LAYOUT_RIGHT_SIDEBAR_HIDE,
  };
};

export const doShowRightSidebar = () => {
  return {
    type: constants.LAYOUT_RIGHT_SIDEBAR_SHOW,
  };
};
