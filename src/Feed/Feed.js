import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import StoryWheel from "./StoryWheel/StoryWheel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryWheel />
      <MessageSender />
      <Post />
    </div>
  );
};

export default Feed;
