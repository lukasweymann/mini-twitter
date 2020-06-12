import React from 'react';
import { useParams } from 'react-router-dom';

import UserSingleTweetFetcher from './UserSingleTweetFetcher';

const UserSingleTweet = () => {
    let { userTweetId } = useParams();

    return <UserSingleTweetFetcher userTweetId={userTweetId} />
};

export default UserSingleTweet;