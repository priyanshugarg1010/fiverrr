import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

const gigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <StarOutlinedIcon className="icon" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <FavoriteIcon />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default gigCard;
