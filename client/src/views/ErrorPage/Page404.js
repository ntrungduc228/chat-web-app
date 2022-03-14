import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./ErrorPage.scss";

const Page404 = () => {
  return (
    <>
      <Row
        type="flex"
        align="middle"
        justify="center"
        style={{ minHeight: "100vh", backgroundColor: "#eff7fe" }}
      >
        <Col span={24} className="page404-container">
          <h1>404</h1>
          <h2 level={2}>Page Not Found</h2>
          <Link to="/" className="btn btn-primary btn-back-home">
            Back To Home
          </Link>
          <h4 level={4}>
            The Page You Are Attempting To Reach Is Not Available.
            <br />
            This May Be Because The Page Does Not Exist Or Has Been Moved.
          </h4>

          <div className="animation-block">
            <div className="bg_circle">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="cross"></div>
            <div className="cross1"></div>
            <div className="cross2"></div>
            <div className="dot"></div>
            <div className="dot1"></div>
            <div className="right-circle1"></div>
            <div className="right-circle"></div>
            <div className="top-circle"></div>
            <div className="center-circle"></div>
            <img
              src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
              className="cloud-logo"
              alt="cloud-logo"
            />
            <img
              src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
              className="cloud-logo1"
              alt="cloud-logo1"
            />
            <img
              src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
              className="cloud-logo2"
              alt="cloud-logo2"
            />
            <img
              src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
              className="cloud-logo3"
              alt="cloud-logo3"
            />
            <img
              src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
              className="cloud-logo4"
              alt="cloud-logo4"
            />
            <div
              className="main-circle"
              style={{
                height: "100px",
                width: "100px",
                left: "26%",
                bottom: "66%",
              }}
            ></div>
            <div className="bottom-circle"></div>
            <div className="bottom-circle1"></div>
          </div>

          {/* <div className="animated-bg">
            <i></i>
            <i></i>
            <i></i>
          </div> */}
        </Col>
      </Row>
    </>
  );
};

export default Page404;
