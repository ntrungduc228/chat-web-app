import React, { lazy } from "react";

const Chat = lazy(() => import("../../components/ChatPage"));

const ChatPage = () => {
  return <Chat />;
};

export default ChatPage;
