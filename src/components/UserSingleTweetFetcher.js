import React from "react";

import UserSingleTweetDisplay from "./UserSingleTweetDisplay";

export default class UserSingleTweetFetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "IDLE", // STARTED, SUCCESS, FAILED,
      errorMessage: null,
      tweets: null,
    };
  }

  render() {
    const { status, tweets } = this.state;

    return (
      <div>
        {status === "IDLE" && (
          <div>
            Component has being mount and will start fetching in a moment
          </div>
        )}

        {status === "STARTED" && <div>Loading...</div>}

        {status === "SUCCESS" && (
          <div>
            <UserSingleTweetDisplay
              id={tweets._id}
              //   user={fact.user}
              text={tweets.text}
              date={tweets.date}
            />
          </div>
        )}

        {status === "FAILED" && (
          <div style={{ backgroundColor: "red" }}>Fetching Tweet failed</div>
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
        fetch(
          `https://twitterbackendd.herokuapp.com/messages/${this.props.factId}`
        )
          .then((response) => {
            return response.json();
          })
          .then((tweet) => {
            this.setState({
              tweets: tweet,
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
