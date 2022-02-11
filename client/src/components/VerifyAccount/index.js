import React, { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import { Row, Col, Typography } from "antd";
import "./VerifyAccount.scss";
import * as actions from "../../redux/actions/Auth";
import { connect } from "react-redux";

const VerifyAccount = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [verifying, setVerifying] = useState(true);
  let navigate = useNavigate();

  const tokenVerify = searchParams.get("token");

  let { verifyAccountSuccess, verifyAccountFinish, verifyAccountMessage } =
    props;

  useEffect(() => {
    if (typeof tokenVerify !== "string" && !(tokenVerify instanceof String)) {
      navigate("/");
    } else {
      if (verifying) {
        props.verifyAccountStart({ token: tokenVerify });
      }
    }
  }, [verifying]);

  useEffect(() => {
    setVerifying(false);
  }, [verifyAccountSuccess, verifyAccountFinish]);

  return (
    <>
      {verifying ? (
        <Spinner />
      ) : (
        <Row
          type="flex"
          align="middle"
          justify="center"
          style={{ minHeight: "100vh", backgroundColor: "#eff7fe" }}
        >
          <Col span={24} className="verify-account-container">
            <h1>{verifyAccountSuccess ? 200 : 400}</h1>
            <h2>{verifyAccountMessage}</h2>
            <Link to="/" className="btn btn-primary btn-back-home">
              Go To Home
            </Link>

            <h4 level={4}>
              {verifyAccountSuccess
                ? "Easy to use our chat app, Attractive and clean design, with many Features"
                : ""}
              <br />
              Project Manager: <strong>Đức Nguyễn</strong>
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
              />
              <img
                src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
                className="cloud-logo1"
              />
              <img
                src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
                className="cloud-logo2"
              />
              <img
                src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
                className="cloud-logo3"
              />
              <img
                src={`${require("../../assets/backgrounds/cloud-logo.png")}`}
                className="cloud-logo4"
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
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { verifyAccountSuccess, verifyAccountFinish, verifyAccountMessage } =
    state.auth;
  return { verifyAccountSuccess, verifyAccountFinish, verifyAccountMessage };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyAccountStart: (data) => dispatch(actions.verifyAccountStart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccount);
