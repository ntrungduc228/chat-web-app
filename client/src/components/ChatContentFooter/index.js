import React, { useState } from "react";
import { Upload, Button, Input, Popover, Tooltip } from "antd";
import "./ChatContentFooter.scss";
import { Picker } from "emoji-mart";

const ChatContentFooter = () => {
  const [emojiVisible, setEmojiVisible] = useState(false);

  return (
    <div className="chat-footer-container">
      <Tooltip title="Images">
        {" "}
        <Upload accept="image/*" name="photos" multiple={true}>
          <Button
            shape="circle"
            className="icon-btn btn-outline-primary btn-upload me-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-image"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </Button>
        </Upload>
      </Tooltip>

      <Tooltip title="Attach">
        {" "}
        <Upload accept="image/*" name="photos" multiple={true}>
          <Button
            shape="circle"
            className="icon-btn btn-outline-primary btn-upload me-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-paperclip"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </Button>
        </Upload>{" "}
      </Tooltip>

      <Input
        placeholder="Write your message..."
        className="input-message"
        bordered={false}
        suffix={""}
      />
      <div className="icon-btn btn-outline-primary btn-emoji">
        <Popover
          content={<Picker set="facebook" sheetSize={32} />}
          title="Title"
          trigger="click"
          visible={emojiVisible}
          onVisibleChange={() => setEmojiVisible(!emojiVisible)}
          placement="topRight"
        >
          <div className="dot-btn dot-primary "> </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-smile"
            style={{ cursor: "pointer" }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </Popover>
      </div>

      <Button shape="circle" className="icon-btn btn-send-message ms-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-send"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </Button>
    </div>
  );
};

export default ChatContentFooter;
