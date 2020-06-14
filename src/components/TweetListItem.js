import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

 import "./TweetListItem.css";

const TweetListItem = (props) => {
  const { id, text } = props;

  return (
    <div className="tweet-list-item">
    <HighlightIcon style={{color: "#2fc4b2", padding: "35px", fontSize: "3em"}}/>
    <a href={`/ /${id}`}><h2>Post</h2></a>
      <h4>{text}</h4>

      <br />
      <br />
      
    </div>
  );
};

export default TweetListItem;
