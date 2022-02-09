import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import _ from "lodash";

const Toast = ({ type, messages, ...opts }) => {
  if (_.isArray(messages)) {
    messages.forEach((message) => toast[type](message, opts));
    return;
  }
  toast[type](messages, opts);
};

export default Toast;
