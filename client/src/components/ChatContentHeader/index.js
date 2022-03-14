import React from "react";
import { Layout, Row, Button } from "antd";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/Layout";
import { Link } from "react-router-dom";
import AvatarCus from "../AvatarCus";
import "./ChatContentHeader.scss";
import { VideoCameraFilled, InfoCircleOutlined } from "@ant-design/icons";

const { Sider, Header } = Layout;

const ChatContentHeader = (props) => {
  const { isMobileDevice } = props;
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 2rem",
        zIndex: "1",
        height: "auto",
        lineHeight: "auto",
        boxShadow: "0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02)",
        backgroundColor: "#fff",
      }}
    >
      <Row type="flex" align="middle">
        {isMobileDevice && (
          <Link to="/">
            <Button
              style={{ border: "0", marginLeft: "-1.2rem" }}
              shape="circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Button>
          </Link>
        )}
        <AvatarCus src="https://joeschmoe.io/api/v1/random" size={50} />
        <span className="ms-3" style={{ lineHeight: "1" }}>
          <span style={{ display: "block" }} className="text-username">
            ntrungduc228
          </span>
        </span>
      </Row>
      <div className="d-flex gap-3 me-3">
        <Button
          shape="circle"
          // onClick={handleCallVideoClick}
          className="btn-chat-header"
        >
          <VideoCameraFilled />
        </Button>

        <Button
          shape="circle"
          // onClick={handleCallVideoClick}
          className="btn-chat-header"
          onClick={() => props.doToggleRightSidebar()}
        >
          <InfoCircleOutlined />
        </Button>
      </div>
    </Header>
  );
};
const mapStateToProps = (state) => {
  const { isMobileDevice } = state.layout;
  return { isMobileDevice };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doToggleRightSidebar: () => dispatch(actions.doToggleRightSidebar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContentHeader);
