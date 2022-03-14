import React from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar";

const ChatPage = () => {
  return (
    <Layout style={{ height: "100vh", backgroundColor: "#eff7fe" }}>
      <Sidebar />
      <div>This is chat page</div>
    </Layout>
  );
};

export default ChatPage;
