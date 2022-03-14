import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

import { Avatar } from "antd";
import "slick-carousel/slick/slick-theme.css";
import "./ListAvatarContact.scss";

const ListAvatarContact = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 3,
    autoplay: true,
    // slidesToScroll: 3,
    // centerMode: true,
    swipeToSlide: true,
    arrows: false,

    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     swipeToSlide: true,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
    // autoplay: true,
  };
  return (
    <div className="list-avatars">
      <Slider {...settings}>
        <Link to="/">
          <div
            className="list-avatars-child"

            // style={{ width: "92px" }}
          >
            <Avatar shape="circle" size={40} />
            <span className="list-avatars-username">ntrungduc228</span>
          </div>
        </Link>

        <Link to="/">
          {" "}
          <div
            className="list-avatars-child"

            // style={{ width: "92px" }}
          >
            <Avatar shape="circle" size={40} />

            <span className="list-avatars-username">
              conchimlellelelllelelellee
            </span>
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div
            className="list-avatars-child"

            // style={{ width: "92px" }}
          >
            <Avatar shape="circle" size={40} />

            <span className="list-avatars-username">
              caubecutehotmeancaykhoe
            </span>
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div
            className="list-avatars-child"

            // style={{ width: "92px" }}
          >
            <Avatar shape="circle" size={40} />

            <span className="list-avatars-username">434344</span>
          </div>
        </Link>
        <Link to="/">
          {" "}
          <div
            className="list-avatars-child"

            // style={{ width: "92px" }}
          >
            <Avatar shape="circle" size={40} />

            <span className="list-avatars-username">51243233</span>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default ListAvatarContact;
