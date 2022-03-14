import React, { useEffect } from "react";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar";
import ChatContent from "../../components/ChatContent";
import RightSideBar from "../../components/RightSideBar";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/Layout";
import "./ChatPage.scss";

const ChatPage = (props) => {
  console.log('is sign in', props)
  const windowOnResize = () => {
    props.doWindowResize(window.innerWidth);
  };

  const { isMobileDevice, rightSidebarVisible } = props;

  useEffect(() => {
    windowOnResize();
  }, []);

  return (
    <Layout style={{ height: "100vh", backgroundColor: "#eff7fe" }} hasSider>
      <Sidebar />
      <ChatContent />
      {!isMobileDevice && rightSidebarVisible && <RightSideBar />}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  const { isMobileDevice, rightSidebarVisible } = state.layout;
  const {isSignIn,verifyAccountSuccess} = state.auth;
  return { isMobileDevice, rightSidebarVisible,isSignIn,verifyAccountSuccess };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doWindowResize: (data) => dispatch(actions.doWindowResize(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
