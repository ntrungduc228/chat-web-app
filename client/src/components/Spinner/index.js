import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./Spinner.scss";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner = () => (
  <div
    style={{
      width: "100%",
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spin indicator={antIcon} />
  </div>
);

export default Spinner;
