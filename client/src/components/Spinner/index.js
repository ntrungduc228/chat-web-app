import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner = () => (
  <div
    style={{
      width: "100%",
      margin: "24px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    }}
  >
    <Spin indicator={antIcon} />
  </div>
);

export default Spinner;
