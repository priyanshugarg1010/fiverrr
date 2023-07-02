/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./Gigs.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { gigs } from "../../data";
import GigCard from "../../components/gigCards/GigCard";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          {" "}
          FIVERRR {">"} DESIGN & GRAPHICS {">"}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverrr's AI Artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <div className="sortBy">SortBy</div>
            <div className="sortType">
              {sort === "sales" ? "Best selling" : "newest"}
            </div>
            <div className="icon" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </div>
            {open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>best selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
