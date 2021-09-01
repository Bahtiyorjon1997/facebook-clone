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
      <Post
        key="1"
        profilePic="https://avatars.githubusercontent.com/u/57130125?v=4"
        message="this is amazing"
        timestamp="02/09/1997 00:43"
        username="Bakhtee"
        image="https://i.pinimg.com/originals/44/ce/2c/44ce2cfa6267fde44790205135a78051.jpg"
      />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
