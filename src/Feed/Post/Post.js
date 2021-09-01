import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
      </div>
      <div className="post__top__info">
        <h3>{username}</h3>
        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
      </div>
    </div>
  );
};

export default Post;
