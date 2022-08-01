import React from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Menu, Avatar, Image } from "antd";
import { Link } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "100%",
        borderRight: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="logo logo-navmenu">
        <Link to="/abc">
          {/* <Avatar
              size="large"
              src="https://joeschmoe.io/api/v1/random"
              style={{ border: "1px solid #000" }}
            /> */}
          <Image src={`${require("../../assets/logo.png")}`} preview={false} />
        </Link>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        // style={{ padding: "40px 0" }}
      >
        <Menu.Item key="1"></Menu.Item>
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
