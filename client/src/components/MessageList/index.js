import React, { useState, useEffect } from "react";
import { List, message, Avatar, Badge } from "antd";
import VirtualList from "rc-virtual-list";
import "./MessageList.scss";

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

const MessageList = (props) => {
  const [data, setData] = useState([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        body.results[0].isGroup = true;
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item, index) => (
          <List.Item
            key={item.email}
            style={{
              backgroundColor: index === 1 && "#e6f7ff",
            }}
            className="list-item"
          >
            <List.Item.Meta
              avatar={
                item.isGroup ? (
                  <Avatar.Group
                    maxCount={2}
                    maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                    size={40}
                  >
                    <Avatar src={item.picture.large} />
                    <Avatar src={item.picture.large} />
                    <Avatar src={"https://joeschmoe.io/api/v1/random"} />
                    <Avatar
                      shape="square"
                      style={{
                        backgroundColor: "#f56a00",
                        borderRadius: "20px",
                      }}
                    >
                      Kkk
                    </Avatar>
                    <Avatar
                      shape="square"
                      style={{
                        backgroundColor: "#87d068",
                        borderRadius: "20px",
                      }}
                    />
                    <Avatar
                      shape="square"
                      style={{
                        backgroundColor: "#1890ff",
                        borderRadius: "20px",
                      }}
                    />
                  </Avatar.Group>
                ) : (
                  <Badge
                    dot
                    status="success"
                    offset={[-7, 5]}
                    style={{ width: "12px", height: "12px" }}
                  >
                    <Avatar
                      src={item.picture.large}
                      size={50}
                      shape="square"
                      style={{ borderRadius: "20px" }}
                    />{" "}
                  </Badge>
                )
              }
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "14px",
                      flex: 1,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      display: "inline-block",
                      width: "100%",
                      textOverflow: "ellipsis",
                    }}
                    className="text-username"
                  >
                    {item.name.last}
                  </h5>
                  <h6>22:08</h6>
                </div>
              }
              description={
                <span
                  style={{
                    fontSize: "14px",
                    flex: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    display: "inline-block",
                    width: "100%",
                    textOverflow: "ellipsis",
                    color: "#647589",
                  }}
                >
                  {item.email} {item.email} {item.email} {item.email}
                </span>
              }
            />
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default MessageList;
