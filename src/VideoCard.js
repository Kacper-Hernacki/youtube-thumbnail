import React, { useState } from "react";
import "./VideoCard.css";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function VideoCard({
  thumbnailUrl,
  channelImageUrl,
  postedDate,
  isCustom,
  title,
  channelName,
  noOfViews,
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thumbTitle, setThumbTitle] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = (e) => {
    setImageUrl(input);
    setThumbTitle(titleInput);
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className="videoCard">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <form>
            <TextField
              placeholder="title"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
            <TextField
              placeholder="Image Url"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" onClick={handleClose}>
              Set image URL
            </Button>
          </form>
        </div>
      </Modal>
      {isCustom && !imageUrl ? (
        <button onClick={(e) => setOpen(true)}>Upload Thumbnail</button>
      ) : (
        <img
          className="videoCard__thumbnail"
          src={imageUrl || thumbnailUrl}
          alt=""
        />
      )}

      <div className="videoCard__info">
        <div className="videoCard__infoChannelImageContainer">
          <img src={channelImageUrl} alt="" />
        </div>

        <div className="videoCard__infoText">
          <p className="videoCard__infoTextTitle">{thumbTitle || title}</p>
          <p className="videoCard__infoTextChannelName">{channelName}</p>
          <p className="videoCard__infoTextNoOfViews">
            {noOfViews}•{postedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
