import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Comments from "../comments/Comments";

const AboutPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState({});

  // API call for post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    //eslint-disable-next-line
  }, []);

  // API call for comments
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
    //eslint-disable-next-line
  }, []);

  // API call for post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${postId}`)
      .then((res) => res.json())
      .then((data) => setImage(data));
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Card
        style={{
          width: "800px",
          height: "200px",
          alignItems: "center",
          marginLeft: "300px",
          marginTop: "50px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {comments.map((comment) => (
        <Comments key={Comment.id} image={image} comments={comment}></Comments>
      ))}
    </div>
  );
};

export default AboutPost;
