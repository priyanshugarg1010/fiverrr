import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

const MyGigs = () => {
  return (
    <div className="myGig">
      <div className="container">
        <div className="title">
          <h2>My Gigs</h2>
          <Link to="/add">
            <button>add new gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Imgages</th>
            <th>title</th>
            <th>price</th>
            <th>sales</th>
            <th>action</th>
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
              <DeleteIcon className="icon" />
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
              <DeleteIcon className="icon" />
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
              <DeleteIcon className="icon" />
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
              <DeleteIcon className="icon" />
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
              <DeleteIcon className="icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
