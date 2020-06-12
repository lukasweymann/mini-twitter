import React from 'react'; 

const UserSingleTweetDisplay = (props) => {
    const {
        date,
        text
    } = props;
    
    return (
        <div className='user-single-tweet-display'>
            {date}
            {text}
        </div>
    )
}

export default UserSingleTweetDisplay;