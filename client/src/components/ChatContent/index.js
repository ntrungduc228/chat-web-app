import React from "react";
import "emoji-mart/css/emoji-mart.css";
import { Layout } from "antd";
import ChatContentHeader from "../ChatContentHeader";
import ChatContentFooter from "../ChatContentFooter";
import Conversation from "./Conversation";
import ChatStyle from "./ChatStyle";

const ChatContent = () => {
  return (
    <Layout
      style={{
        // position: "relative",
        // width: isMobileDevice && rightSidebarVisible ? 0 : "auto",
        // width: "100%",
        backgroundColor: "#eff7fe",
      }}
    >
      <ChatContentHeader />
      <ChatStyle>
        <Conversation />
      </ChatStyle>
      <ChatContentFooter />

      {/* <Layout.Content style={{}}>
        <div style={{ height: "100vh" }}>This is chat content</div>
        <div style={{ padding: 24, textAlign: "center" }}>
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Layout.Content> */}
    </Layout>
  );
};

export default ChatContent;
