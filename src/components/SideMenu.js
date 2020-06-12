import React from 'react';
import './SideMenu.Styles.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HighlightIcon from '@material-ui/icons/Highlight';




class SideMenu extends React.Component{
    render(){
        return(
            <div className="left-side-menu">
            <HighlightIcon style={{color: "#2fc4b2", padding: "35px", fontSize: "3em"}}/>
            <a><HomeOutlinedIcon style={{marginRight: "10px"}}/> Home</a>
            <a><NotificationsNoneOutlinedIcon style={{marginRight: "10px"}}/> Notifications</a>
            <a><MailOutlineOutlinedIcon style={{marginRight: "10px"}}/> Messages</a>
            <a><AccountCircleOutlinedIcon style={{marginRight: "10px"}}/> Profile</a>
            <a><HelpOutlinedIcon style={{marginRight: "10px"}}/> About</a>
            
            </div>
        )
    }
}
export default SideMenu;