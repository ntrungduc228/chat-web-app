import React from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const NavMenu = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "100%",
        borderRight: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavMenu;
