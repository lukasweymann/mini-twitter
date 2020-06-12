import React from 'react';
import SideMenu from '../components/SideMenu';
import TweetList from '../components/TweetList';

function HomePage(){
    return(
        <div className="homepage-ginger">
        <SideMenu />
        <TweetList />
        </div>
    )
}
export default HomePage;