import React from 'react';

class UserSingleTweetFetcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'IDLE', // STARTED, SUCCEED, FAILED
            errorMessage: null,
            tweetFacts: '',
        };
    }

    render() {
        const { status, tweetFacts } = this.state;

        return (
            <div>
                {status === 'IDLE' && (
                    <div>
                        Component has being mount
                        and will start fetching wait a moment
                    </div>
                )}

                {status === 'STARTED' && (
                    <div>
                        Loading please wait...
                    </div>
                )}

                {status === 'SUCCEED' && (
                    <div>
                        {tweetFacts}
                    </div>
                )}

                {status === 'FAILED' && (
                    <div style={{ backgroundColor: 'red' }}>
                        Tweet facts fetching failed
                    </div>
                )}
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            status: 'STARTED',
            errorMessage: null
        }, () => {
            fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes') // This needs to be changed
                .then(response => {
                    return response.json();
                })
                .then(tweetFactsList => {
                    this.setState({
                        tweetFacts: tweetFactsList,
                        status: 'SUCCEED'
                    });
                })
                .catch((error) => {
                    this.setState({
                        status: 'FAILED',
                        errorMessage: error.message,
                    })
                });
        })
    }
}

export default UserSingleTweetFetcher;
