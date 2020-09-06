import React from "react";
import "./Comments.css";
import Avatar from "@material-ui/core/Avatar";

const Comments = (props) => {
  return (
    <div className="comments__box">
      <div className="avatar__image">
        <Avatar alt="imageAvatar" src={props.image.url} />
      </div>
      <h3>Comment By : {props.comments.name}</h3>
      <p className="email"> Email : {props.comments.email}</p>
      <p className="comment">"{props.comments.body}"</p>
    </div>
  );
};

export default Comments;
