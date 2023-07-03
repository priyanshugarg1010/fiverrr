import React from "react";
import "./Gig.scss";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Slider } from "infinite-react-carousel";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">
            FIVERRR {">"} DESIGN & GRAPHICS {">"}
          </span>
          <h1>i will create AI generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Priyanshu Garg</span>
            <div className="stars">
              <StarOutlinedIcon className="icon" />
              <StarOutlinedIcon className="icon" />
              <StarOutlinedIcon className="icon" />
              <StarOutlinedIcon className="icon" />
              <span>4</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About this gig</h2>
          <p>
            100% satisfied customers !!! <br />
            Perfect Logo Edit Gig for you !!!
            <br />
            <br />
            UNLIMITED Revisions !!! <br />
            &nbsp; &nbsp; Need a New Design or Renew your old one?
            <br />
            This service is exactly for your Modifications/editings for outdated
            or design. Bring Fresh Modern Professional look to your brand by
            giving it creative hand.
            <ol>
              <li>Logo Edit / Change,</li>
              <li>Enlarge,</li>
              <li>Recreate,</li>
              <li>Recolor,</li>
              <li>Modernize</li>
              <li>
                Fix errors in your Logos with the best quality with any
                resolution you need for the Modern world.
              </li>
            </ol>
          </p>

          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Priyansu Garg</span>
                <div className="stars">
                  <StarOutlinedIcon className="icon" />
                  <StarOutlinedIcon className="icon" />
                  <StarOutlinedIcon className="icon" />
                  <StarOutlinedIcon className="icon" />
                  <span>4</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">INR</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <p>
                My name is Ciaran, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Priyanshu Garg</span>
                  <div className="country">
                    <img src="./images/flag.png" alt="" />
                    <span>INDIA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <span>4</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate non vel aliquid excepturi corrupti dicta magni nulla
                fugiat, laudantium adipisci, harum reprehenderit, qui
                exercitationem iusto necessitatibus libero! Praesentium eos modi
                nemo, quam aperiam labore quisquam tempora dolor suscipit iste
                cum voluptatibus optio consectetur sed atque repellat cumque
                libero obcaecati! Dolorum?
              </p>
            </div>
            <div className="helpful">
              <span>Helpful?</span>
              <ThumbUpOffAltOutlinedIcon />
              <span>Yes</span>
              <ThumbDownOffAltOutlinedIcon />
              <span>No</span>
            </div>
          </div>
          <hr />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Gig;
