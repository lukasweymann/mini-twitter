import React, { useEffect, useState } from "react";

import TweetListItem from "./TweetListItem";
import './TweetList.css'

const TweetList = () => {

  const [status, setStatus] = useState("IDLE");
  const [error, setError] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {

    setStatus("STARTED");
    try {
      (async function () {
        const fet = await fetch("https://cors-anywhere.herokuapp.com/https://twitterbackendd.herokuapp.com/messages/");
        const res = await fet.json();
        setStatus("SUCCESS")
        setTweets(res)
      })();
    } catch (err) {
      setError(err)
    }
  }, [])


  return (
    <div className="tweets-list">
      {status === "IDLE" && (
        <div>
          Component has been mounted and will start fetching in a moment
        </div>
      )}

      {status === "STARTED" && <div>Loading...</div>}

      {
        status === "SUCCESS" && (
          <div>
            {tweets.map((fact) => {
              return (
                <TweetListItem
                  key={fact._id}
                  id={fact._id}
                  text={fact.text}
                  user={fact.user}
                />
              );
            })}
          </div>
        )
      }

      {
        status === "FAILED" && (
          <div style={{ backgroundColor: "red" }}>Fetching tweets failed</div>
        )
      }
    </div >
  );
}


export default TweetList;

