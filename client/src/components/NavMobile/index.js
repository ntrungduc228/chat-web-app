import React, { useState } from "react";
import { Drawer, Menu, Space, Button } from "antd";
import NavMenu from "../NavMenu";

const NavMobile = (props) => {
  return (
    <Drawer
      placement="left"
      //   className="hideOnDesktop"
      onClose={props.onClose}
      visible={props.visible}
      width={100}
      // mask={false}
      extra={
        <Space>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="primary" onClick={props.onClose}>
            OK
          </Button>
        </Space>
      }
    >
      <NavMenu />
    </Drawer>
  );
};

export default NavMobile;
