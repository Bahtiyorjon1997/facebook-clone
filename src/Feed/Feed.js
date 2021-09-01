import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import StoryWheel from "./StoryWheel/StoryWheel";
import Post from "./Post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryWheel />
      <MessageSender />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
