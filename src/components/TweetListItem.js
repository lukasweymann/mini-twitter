import React from "react";
import { Link } from "react-router-dom";

import "./TweetListItem.css";

const TweetListItem = (props) => {
  const { id, type, text, id_user } = props;

  return (
    <div className="tweet-list-item">
      {/* <div>id: {id}</div>
            <div>type: {type}</div>
            <div>user: {JSON.stringify(user)}</div>
            <div>upvotes: {upvotes}</div>

            <br />
            <br /> */}
      <b>{text}</b>

      <br />
      <br />
      <Link to={`/tweets/${id}`}>Tweet</Link>
    </div>
  );
};

export default TweetListItem;
