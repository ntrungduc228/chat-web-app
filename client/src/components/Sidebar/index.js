import React, { useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Input,
  Layout,
  Menu,
  Row,
  Tooltip,
  Tabs,
} from "antd";
import AvatarCus from "../AvatarCus";
import {
  SettingOutlined,
  SearchOutlined,
  MoreOutlined,
  AlertOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./Sidebar.scss";
import MainNav from "../MainNav";
import ListAvatarContact from "../ListAvatarContact";
import MessageList from "../MessageList";
import GroupList from "../GroupList";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/Layout";
import NavMobile from "../NavMobile";

const { Sider, Header } = Layout;
const { SubMenu } = Menu;

const { TabPane } = Tabs;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const MessageSidebar = () => {
  const [chatBtnActive, setChatBtnActive] = useState("message-menu-btn-active");
  const [groupBtnActive, setGroupBtnActive] = useState("");
  function onChangeMenuMessage(key) {
    console.log(key);
    if (key === "chat") {
      setChatBtnActive("message-menu-btn-active");
      setGroupBtnActive("");
    } else if (key === "group") {
      setChatBtnActive("");
      setGroupBtnActive("message-menu-btn-active");
    }
  }
  return (
    <Tabs
      defaultActiveKey="chat"
      onChange={onChangeMenuMessage}
      centered
      className="message-menu"
      tabBarGutter={20}
    >
      <TabPane
        tab={
          <Button
            type="primary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-message-square"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            }
            className={`message-menu-chat-btn ${chatBtnActive}`}
          >
            Chat
          </Button>
        }
        key="chat"
      >
        <MessageList />
      </TabPane>
      <TabPane
        tab={
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            className={`message-menu-chat-btn ${groupBtnActive}`}
          >
            Group
          </Button>
        }
        key="group"
      >
        <GroupList />
      </TabPane>
    </Tabs>
  );
};

const MessageHeader = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<SearchOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled icon={<AlertOutlined />}>
        Navigation Two
      </Menu.Item>
    </Menu>
  );
};

const SearchElement = () => {
  return (
    <Row
      style={{
        padding: "0.3rem 1.5rem",
        // boxShadow: "0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02)",
        marginBottom: "0.3rem",
      }}
    >
      <Input
        placeholder="Search..."
        prefix={<SearchOutlined className="search-icon" />}
        size="large"
        className="input-search"
        bordered={false}
      />
    </Row>
  );
};

const UserInfo = (props) => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.3rem 1.5rem",
        // padding: "0.3rem 0",
        zIndex: "1",
        // boxShadow: "0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02)",
        // height: "auto",
        lineHeight: "auto",
        backgroundColor: "#fff",
        justifyContent: "space-between",
      }}
    >
      <Row type="flex" align="middle" className="user-info">
        <AvatarCus />
        <span style={{ display: "block" }}>ntrungduc228</span>
      </Row>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Tooltip title="Notifications" placement="leftBottom">
          <Button
            shape="circle"
            // icon={<AlertOutlined />}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell-ringing"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
              </svg>
            }
            style={{ border: "0" }}
          ></Button>
        </Tooltip>
        <Tooltip title="Options" placement="rightBottom">
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button
              shape="circle"
              // icon={<MoreOutlined />}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-dots-vertical"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="19" r="1" />
                  <circle cx="12" cy="5" r="1" />
                </svg>
              }
              style={{ border: "0" }}
            ></Button>
          </Dropdown>
        </Tooltip>
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => props.toggle(),
          }
        )}
        <Button
          shape="circle"
          icon={<AlertOutlined />}
          onClick={props.showDrawer}
          style={{ border: "0" }}
        ></Button>
      </div>
    </Header>
  );
};

const SideBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const [visible, setVisible] = useState(false);
  // const onClose = () => {
  //   setVisible(false);
  // };
  function onClose() {
    setVisible(false);
  }
  const showDrawer = () => {
    setVisible(true);
  };

  const { isMobileDevice, leftSidebarVisible } = props;
  return (
    <>
      <NavMobile visible={visible} onClose={onClose} />
      <MainNav collapsed={collapsed} />
      <Sider
        width={
          isMobileDevice && leftSidebarVisible
            ? "100vw"
            : isMobileDevice && !leftSidebarVisible
            ? "0"
            : "360"
        }
        // style={{
        //   overflow: "auto",
        //   height: "100vh",
        //   position: "fixed",
        //   left: 0,
        //   top: 0,
        //   bottom: 0,
        // }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            // backgroundColor: "#f5f7fb",
            padding: "0.3rem 0rem",
            backgroundColor: "#fff",
            height: "100%",
            borderRight: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <UserInfo
            collapsed={collapsed}
            toggle={toggle}
            showDrawer={showDrawer}
            visible={visible}
          />
          <SearchElement />
          <ListAvatarContact />
          <MessageSidebar />
        </div>
      </Sider>
    </>
  );
};

const mapStateToProps = (state) => {
  const { isMobileDevice, leftSidebarVisible } = state.layout;
  return { isMobileDevice, leftSidebarVisible };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doWindowResize: (data) => dispatch(actions.doWindowResize(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
