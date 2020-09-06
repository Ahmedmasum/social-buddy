import React from "react";
import Post from "../post/Post";
import "./Posts.css";

const Posts = (props) => {
  console.log(props);
  return (
    <div className="posts">
      {props.posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
