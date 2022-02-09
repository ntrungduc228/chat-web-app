import React from "react";
import { Form, Input, Button, Space, Row, Image } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "./Signin.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/Auth";

const Content = styled.div`
  z-index: 2;
  width: 600px;
  background-color: #fff;
  border-radius: 3px;
  padding: 50px 80px;

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
  password: [
    {
      required: true,
      message: "Please input your Password!",
    },
  ],
};

const SignIn = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(actions.showLoading());
    console.log("Received values of form: ", values);
  };
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
          <h4>Wellcome to chitchat please, signin to your account.</h4>
        </div>

        <Form
          layout="vertical"
          name="signin_form"
          className="auth-form-content"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={rules.email}
            className="auth-form-item"
          >
            <Input
              size="large"
              className="auth-form-input "
              prefix={<MailOutlined style={{ marginRight: "4px" }} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules.password}>
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
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "20px" }}>
            <div className="forgot-password-content">
              <Link
                className="login-form-forgot forgot-password-link"
                to="/forgot-password"
              >
                Forgot password
              </Link>
            </div>
          </Form.Item>

          <Form.Item className="auth-form-btn-container">
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="auth-form-btn"
                loading={loading}
              >
                Sign In
              </Button>
            </Space>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            Or <Link to="/signup">Sign Up now!</Link>
          </Form.Item>
        </Form>
      </Content>
    </Row>
  );
};

export default SignIn;
