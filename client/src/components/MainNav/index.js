import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./MainNav.scss";
import NavMenu from "../NavMenu";

const { Sider, Header } = Layout;

const MainNav = (props) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      className="main-nav hideOnMobile"
    >
      {/* <div
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
      </div> */}
      <NavMenu />
    </Sider>
  );
};

export default MainNav;
