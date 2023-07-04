import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
const Orders = () => {
  const currentUser = {
    id: 1,
    username: "priyanshu garg",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h2>orders</h2>
        </div>
        <table>
          <tr>
            <th>Imgages</th>
            <th>title</th>
            <th>price</th>
            <th>{currentUser?.isSeller ? "buyer" : "seller"}</th>
            <th>contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>345</td>
            <td>
              <EmailIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>345</td>
            <td>
              <EmailIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>345</td>
            <td>
              <EmailIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>345</td>
            <td>
              <EmailIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>345</td>
            <td>
              <EmailIcon className="icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
