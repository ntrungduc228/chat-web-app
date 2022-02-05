import React from "react";
import { Form, Input, Button, Space, Row } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "./Signin.scss";
import { Link } from "react-router-dom";

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

const formLayout = {};

const SignIn = () => {
  const onFinish = (values) => {
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
        <div className="text-center mb-5 signin-content">
          <div className="signin-content-header">
            <img src="/landing-logo.png" />
          </div>
          <h3>Hello Everyone , We are Chitchat</h3>
          <h4>Wellcome to chitchat please, signin to your account.</h4>
        </div>

        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          {...formLayout}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input size="large" prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <div className="forgot-password-content">
              <Link
                className="login-form-forgot forgot-password-link"
                to="/forgot-password"
              >
                Forgot password
              </Link>
            </div>
          </Form.Item>

          <Form.Item className="signin-form-btn-container">
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="signin-form-btn"
              >
                Sign In
              </Button>
            </Space>
          </Form.Item>
          <Form.Item style={{ marginBottom: "6px" }}>
            Or <Link to="/signup">Sign Up now!</Link>
          </Form.Item>
        </Form>
      </Content>
    </Row>
  );
};

export default SignIn;
