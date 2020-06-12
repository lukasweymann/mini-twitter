import React from "react";

import TweetListItem from "./TweetListItem";

class TweetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "IDLE", // STARTED, SUCCESS, FAILED
      errorMessage: null,
      tweets: [],
    };
  }

  render() {
    const { status, tweets } = this.state;

    return (
      <div>
        {status === "IDLE" && (
          <div>
            Component has been mounted and will start fetching in a moment
          </div>
        )}

        {status === "STARTED" && <div>Loading...</div>}

        {status === "SUCCESS" && (
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
        )}

        {status === "FAILED" && (
          <div style={{ backgroundColor: "red" }}>Fetching tweets failed</div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.setState(
      {
        status: "STARTED",
        errorMessage: null,
      },
      () => {
        fetch("https://twitterbackendd.herokuapp.com/messages/")
          .then((response) => {
            return response.json();
          })
          .then((TweetList) => {
            this.setState({
              tweets: TweetList.all,
              status: "SUCCESS",
            });
          })
          .catch((error) => {
            this.setState({
              status: "FAILED",
              errorMessage: error.message,
            });
          });
      }
    );
  }
}

export default TweetList;
