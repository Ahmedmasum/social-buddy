import React, { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Posts from "./components/posts/Posts";
import AboutPost from "./components/About-Post.js/AboutPost";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";

function App() {
  const [posts, setPosts] = useState([]);

  // API call for posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Posts posts={posts}></Posts>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about/:postId">
          <AboutPost></AboutPost>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
