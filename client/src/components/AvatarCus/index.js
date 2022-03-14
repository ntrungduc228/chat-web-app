import React from "react";
import { Avatar, Badge } from "antd";

const AvatarCus = ({ isShowBadge = true, ...props }) => {
  return (
    <div style={{ lineHeight: "normal" }}>
      {!isShowBadge ? (
        <Avatar shape="circle" {...props} />
      ) : (
        <Badge
          dot
          status="success"
          // style={{ position: "absolute", top: "39%", right: "4%" }}
          offset={[-5, 3]}
        >
          <Avatar shape="circle" {...props} />
        </Badge>
      )}
    </div>
  );
};

export default AvatarCus;
