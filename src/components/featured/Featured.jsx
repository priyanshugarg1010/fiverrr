import React from "react";
import "./Featured.scss";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInputs">
              <div className="searchIcons">
                <ManageSearchIcon />
              </div>
              <input
                type="text"
                placeholder='       Try "building mobile app"'
              />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>AI Services</button>
            <button>Logo Design</button>
            <button>Wordpress</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/img1.jpg" alt="Priyanshu" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
