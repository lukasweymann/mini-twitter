import React from 'react';
import SideMenu from '../components/SideMenu';
import TweetList from '../components/TweetList';
import './HomePage.css';

function HomePage(){
    return(
        <div className="homepage-ginger">
        <SideMenu />
        <TweetList />
        </div>
    )
}
export default HomePage;