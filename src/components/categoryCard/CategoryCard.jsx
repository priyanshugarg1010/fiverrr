/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";
import { cards } from "../../data";

const CategoryCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="categoryCard">
        <img src={item.img} alt="" />
        <span className="title">{item.title}</span>
        <span className="description">{item.desc}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
