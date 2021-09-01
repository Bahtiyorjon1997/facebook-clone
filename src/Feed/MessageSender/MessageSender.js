import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // some bd stuff
    setInput("");
    setPhotoURL("");
  };
  return (
    <div className="messageSender">
      <div className="message__sender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind?`}
          />
          <input
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder={`image URL (Optional)`}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="message__sender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
