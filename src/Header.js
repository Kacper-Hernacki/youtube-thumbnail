import React from "react";
import "./Header.css";
import Logo from "./Logo.png";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Avatar, Button, TextField } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <IconButton>
          <ReorderIcon fontSize="large" />
        </IconButton>

        <img className="header__logo" src={Logo} alt="" />
      </div>

      <div className="header__search">
        <TextField
          className="header__searchInput"
          placeholder="search"
          variant="outlined"
          type="text"
        />
        <Button className="header__searchButton" variant="outlined">
          <SearchIcon />
        </Button>
      </div>
      <div className="header__rightLogos">
        <IconButton>
          <VideoCallIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <AppsIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <NotificationsIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
