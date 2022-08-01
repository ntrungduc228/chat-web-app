import React from "react";
import VirtualList from "rc-virtual-list";
import { Spin } from "antd";

const Conversation = () => {
  var itemElements = [];

  for (var i = 0; i < 100; i++) {
    itemElements.push(i);
  }

  return (
    <>
      {/* <VirtualList
        data={itemElements}
        height={100}
        itemHeight={47}
        itemKey="email"
      >
        {(item, index) => (
          <div className="item" key={i}>
            item {i}
          </div>
        )}
      </VirtualList> */}
      Condasdsaversation
    </>
  );
};

export default Conversation;
