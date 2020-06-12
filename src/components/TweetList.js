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
    const { status, catFacts } = this.state;

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
                  type={fact.type}
                  text={fact.text}
                  user={fact.user}
                  upvotes={fact.upvotes}
                />
              );
            })}
          </div>
        )}

        {status === "FAILED" && (
          <div style={{ backgroundColor: "red" }}>
            Fetching tweets failed
          </div>
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
        fetch("https://cat-fact.herokuapp.com/facts")
          .then((response) => {
            return response.json();
          })
          .then((TweetList) => {
            this.setState({
              tweets: tweetsList.all,
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