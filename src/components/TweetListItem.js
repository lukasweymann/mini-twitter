import React from "react";
import { Link } from "react-router-dom";

// import "./TweetListItem.css";

const TweetListItem = (props) => {
  const { id, text } = props;

  return (
    <div className="tweet-list-item">
      <b>{text}</b>

      <br />
      <br />
      <Link to={`/ /${id}`}>Tweet</Link>
    </div>
  );
};

export default TweetListItem;
