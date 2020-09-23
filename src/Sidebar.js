import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RestoreIcon from "@material-ui/icons/Restore";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <div className="sidebar__option">
          <IconButton>
            <HomeIcon />
          </IconButton>
          Home
        </div>
        <div className="sidebar__option">
          <IconButton>
            <WhatshotIcon />
          </IconButton>
          Preferencies
        </div>
        <div className="sidebar__option">
          <IconButton>
            <SubscriptionsIcon />
          </IconButton>
          Subscriptions
        </div>
      </div>
      <div className="sidebar__options">
        <div className="sidebar__option">
          <IconButton>
            <PlayCircleFilledIcon />
          </IconButton>
          Playlist
        </div>
        <div className="sidebar__option">
          <IconButton>
            <RestoreIcon />
          </IconButton>
          History
        </div>
        <div className="sidebar__option">
          <IconButton>
            <VideoLibraryIcon />
          </IconButton>
          More Videos
        </div>
        <div className="sidebar__option">
          <IconButton>
            <ScheduleIcon />
          </IconButton>
          Watch Later
        </div>
        <div className="sidebar__option">
          <IconButton>
            <ThumbUpAltIcon />
          </IconButton>
          Liked Videos
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
