import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  return (
    <Card style={{ width: "300px" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/about/${props.post.id}`} className="post__btn">
          <Button size="small" color="primary">
            See More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
