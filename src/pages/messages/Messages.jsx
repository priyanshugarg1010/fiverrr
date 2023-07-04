import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "priyanshu garg",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos ipsum atque.`;
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h2>messages</h2>
        </div>
        <table>
          <tr>
            <th>buyer</th>
            <th>last message</th>
            <th>date</th>
            <th>action</th>
          </tr>
          <tr className="active">
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 75)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 75)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>mark as read</button>
            </td>
          </tr>
          <tr>
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 75)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 75)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 75)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
