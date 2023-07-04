import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className="link" to="/messages">
            MESSAGES
          </Link>{" "}
          {">"} PRIYANSHU GARG {">"}
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              dolorem nemo delectus?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              dolorem nemo delectus?
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              dolorem nemo delectus?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              dolorem nemo delectus?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/8864283/pexels-photo-8864283.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              dolorem nemo delectus?
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
