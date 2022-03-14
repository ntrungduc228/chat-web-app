import React, { useEffect, useState } from "react";
import {
  Layout,
  Button,
  Collapse,
  Popconfirm,
  Avatar,
  Row,
  Col,
  Image,
  Modal, Space
} from "antd";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/Layout";
import "./RightSideBar.scss";
import AvatarCus from "../AvatarCus";
import {
  CaretDownOutlined,
  LogoutOutlined,
  DeleteOutlined,
  FileOutlined,ExclamationCircleOutlined 
} from "@ant-design/icons";
import ListUser from "./ListUser";
import FileList from "./FileList";
import ImageGrid from "./ImageGrid";

import VirtualList from "rc-virtual-list";
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";

const { Sider, Header } = Layout;
const { Panel } = Collapse;
const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

const UserInfo = () => {
  return (
    <Header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0.3rem 1.5rem",
        zIndex: "1",
        boxShadow: "0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02)",
        height: "auto",
        lineHeight: "auto",
        backgroundColor: "#fff",
      }}
      className="pb-5"
    >
      <div>
        <AvatarCus src="#" size={130} isShowBadge={false} />
      </div>
      <div className="mt-3">
        <h3>ntrungduc228</h3>
        {
          <h4
            className="text-center mt-2"
            style={{
              color: "#50be19",
              // color: "#f50",
            }}
          >
            Online
            {/* Offline */}
          </h4>
        }
      </div>
    </Header>
  );
};
function callback(key) {
  console.log(key);
}
const renderImagesGrid = (source) => {
  if (!source || (source && source.length === 0)) {
    return null;
  }
  return source.map((image, key) => (
    <img
      key={key}
      style={{
        backgroundImage: `url(${image.src})`,
      }}
      src={`${image.src}`}
      className="photo"
    />
  ));
};

const renderFileList = (source) => {
  if (!source || (source && source.length === 0)) {
    return null;
  }
  return source.map((file, index) => (
    <div className="file" key={index}>
      <FileOutlined />
      <a target="_blank" href={`${file.href}`} download={`${file.download}`}>
        {file.name}
      </a>
    </div>
  ));
};

const RenderMembers = () => {
  const ContainerHeight = 400;
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        body.results[0].isGroup = true;
        setData(data.concat(body.results));
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  return (
    <VirtualList
      data={data}
      height={ContainerHeight}
      itemHeight={47}
      itemKey="email"
      onScroll={onScroll}
    >
      {(item, index) => (
        <div className="list-item" key={index}>
          <div>
            <Avatar
              src={item.picture.large}
              size={50}
              shape="square"
              style={{ borderRadius: "20px", marginRight: "10px" }}
            />{" "}
            {item.name.last}
          </div>
          <div style={{ lineHeight: "40px" }}>
            <Button style={{ border: "0" }} shape="circle">
              <DeleteOutlined />
            </Button>
          </div>
        </div>
      )}
    </VirtualList>
  );
};

const ContentSideBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Collapse
      defaultActiveKey={["1"]}
      onChange={callback}
      bordered={false}
      expandIconPosition="right"
      expandIcon={({ isActive }) => <CaretDownOutlined />}
      // ghost
    >
      <Panel header={<h5>Options</h5>} key="1" className="panel-sidebar-item">
        <Popconfirm
          style={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            border: "1px solid black",
          }}
          title="Are you sure to leave this conversation?"
          okText="Leave"
        >
          Leave Group Chat
          {/* <ButtonCus text="Leave Group Chat" icon="logout" /> */}
        </Popconfirm>

        <Button block icon={<LogoutOutlined />}>
          Rename
        </Button>
        <Button block icon={<LogoutOutlined />}>
          Change Avatar
        </Button>
        <Button block icon={<LogoutOutlined />} style={{ border: "none" }}>
          Add new member
        </Button>
        <Button block icon={<LogoutOutlined />} style={{ border: "none" }} onClick={() =>  showConfirm()}>
          Unfriend
        </Button>
      </Panel>
      <Panel header={<h5>Members</h5>} key="2" className="panel-sidebar-item">
        <ListUser>
          {/* {renderMembers()} */}
          <RenderMembers />
        </ListUser>
      </Panel>
      <Panel
        header={<h5>Shared Files</h5>}
        key="4"
        className="panel-sidebar-item"
      >
        <FileList>
          {renderFileList([
            { href: "", download: "", name: "abcd.pdf" },
            { href: "", download: "", name: "bao-cao-cnpm.docx" },
          ])}
        </FileList>
        <Button type="link" block>
          ...
        </Button>
      </Panel>
      <Panel
        header={<h5>Shared Images</h5>}
        key="5"
        className="panel-sidebar-item"
      >
        <ImageGrid
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          {/* {renderImagesGrid([
            { src: require("../../assets/avatar-default.jpg") },
            { src: require("../../assets/landing-logo.png") },
            {
              src: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
            },
          ])} */}

          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
          >
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            />
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
            />
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
            />
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            />
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
            />
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
            />
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            />
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
            />
            <Image
              className="photo"
              src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
            />
          </Image.PreviewGroup>
        </ImageGrid>
        <Button type="link" block>
          ...
        </Button>
      </Panel>
    </Collapse>
  );
};

const RightSideBar = (props) => {
  const { isMobileDevice, rightSidebarVisible } = props;

  return (
    <Sider
      width={isMobileDevice ? "100vw" : "300px"}
      style={{ overflowY: "auto" }}
    >
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          backgroundColor: "#fff",
          height: "100%",
          borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            backgroundColor: "#fff",
            height: "100%",
            borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          {!isMobileDevice && (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                padding: "1.6rem 2rem",
              }}
            >
              <Button
                shape="circle"
                className="icon-btn btn-outline-light btn-sm"
                onClick={() => props.doHideRightSidebar()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Button>
            </div>
          )}

          <UserInfo />
          <ContentSideBar />
        </div>
      </div>
    </Sider>
  );
};

const mapStateToProps = (state) => {
  const { isMobileDevice, rightSidebarVisible } = state.layout;
  return { isMobileDevice, rightSidebarVisible };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doHideRightSidebar: () => dispatch(actions.doHideRightSidebar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
