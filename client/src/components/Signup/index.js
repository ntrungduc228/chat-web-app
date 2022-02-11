import React, { useEffect } from "react";
import { Form, Input, Button, Space, Row, Radio, Image } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Signup.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/Auth";

const Content = styled.div`
  z-index: 2;
  width: 600px;
  background-color: #fff;
  border-radius: 3px;
  padding: 20px 80px;

  @media only screen and (max-width: 600px) {
    padding: 20px 30px;
  }
`;

const rules = {
  email: [
    {
      type: "email",
      message: "The input is not valid E-mail!",
    },
    {
      required: true,
      message: "Please input your E-mail!",
    },
  ],
  gender: [
    {
      required: true,
      message: "Please select gender!",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your Password!",
    },
    {
      min: 6,
      message: "At less 6 characters!",
    },
    {
      max: 128,
      message: "Must be 128 characters or less!",
    },
  ],
  confirm_password: [
    {
      required: true,
      message: "Please confirm your Password!",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The two passwords that you entered do not match!")
        );
      },
    }),
  ],
};

// const rules = { email: [], password: [], gender: [], confirm_password: [] };

const SignUp = (props) => {
  const { signUpLoading, signUpMessage } = props;

  const onFinish = (values) => {
    props.signUpStart(values);
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const [gender, setGender] = React.useState("male");

  // const onChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   setGender(e.target.value);
  // };

  return (
    <Row
      type="flex"
      align="middle"
      justify="center"
      style={{ minHeight: "100vh", backgroundColor: "#f1f1f1" }}
    >
      <Content>
        <div className="text-center auth-form-header">
          <div className="auth-form-header-logo">
            <Image
              src={`${require("../../assets/landing-logo.png")}`}
              preview={false}
            />
          </div>
          <h3>Hello Everyone , We are Chitchat</h3>
          <h4>Wellcome to chitchat please signup to your account.</h4>
        </div>

        <Form
          layout="vertical"
          initialValues={{ gender: "male" }}
          name="signup_form"
          className="auth-form-content"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={rules.email}
            className="auth-form-item"
            hasFeedback
          >
            <Input
              size="large"
              className="auth-form-input"
              prefix={<MailOutlined style={{ marginRight: "4px" }} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={rules.gender}
            className="auth-form-item"
          >
            <Radio.Group
              // onChange={onChange}
              // value={gender}
              style={{ display: "flex", justifyContent: "start" }}
            >
              <Radio value={"male"} defaultValue>
                Male
              </Radio>
              <Radio value={"female"}>Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={rules.password}
            className="auth-form-item"
            hasFeedback
          >
            <Input.Password
              size="large"
              className="auth-form-input"
              prefix={
                <LockOutlined
                  className="site-form-item-icon"
                  style={{ marginRight: "4px" }}
                />
              }
              type="password"
              placeholder="Password"
              id="signup_password"
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirm_password"
            rules={rules.confirm_password}
            hasFeedback
          >
            <Input.Password
              size="large"
              className="auth-form-input"
              prefix={
                <LockOutlined
                  className="site-form-item-icon"
                  style={{ marginRight: "4px" }}
                />
              }
              type="password"
              placeholder="Confirm Password"
              id="signup_confirm_password"
            />
          </Form.Item>
          <Form.Item className="auth-form-btn-container">
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="auth-form-btn"
                loading={signUpLoading}
              >
                Sign Up
              </Button>
            </Space>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            Already have an account?<Link to="/signin"> Sign In now!</Link>
          </Form.Item>
        </Form>
      </Content>
    </Row>
  );
};

const mapStateToProps = (state) => {
  const { signUpLoading, signUpMessage, signUpSuccess } = state.auth;
  const { appLanguage } = state.app;
  return { signUpLoading, appLanguage, signUpMessage, signUpSuccess };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoading: () => dispatch(actions.showLoading()),
    signUpStart: (data) => dispatch(actions.signUpStart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
