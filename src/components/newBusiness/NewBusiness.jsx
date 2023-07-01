import "./NewBusiness.scss";
import React from "react";

/* eslint-disable react/no-unescaped-entities */
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NewBusiness = () => {
  return (
    <div className="features dark">
      <div className="container">
        <div className="item">
          <h1>
            fiverrr<i> business.</i>
          </h1>
          <h1>
            <b> A solution built for</b>
            <i> business</i>
          </h1>
          <p>
            Upgrade to a curated experience to access vetted talent and
            exclusive tools
          </p>
          <div className="title">
            <div className="icon">
              <CheckCircleOutlineIcon />
            </div>
            Talent matching
          </div>
          <div className="title">
            <div className="icon">
              <CheckCircleOutlineIcon />
            </div>
            Dedicated account management
          </div>
          <div className="title">
            <div className="icon">
              <CheckCircleOutlineIcon />
            </div>
            Team collaboration tools
          </div>

          <div className="title">
            <div className="icon">
              <CheckCircleOutlineIcon />
            </div>
            Count on 24/7 support
          </div>
          <button>Explore Fiverrr Business</button>
        </div>
        <div className="item">
          <img src="./images/img12.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewBusiness;
