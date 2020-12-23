import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  const loadData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(data);
  };

  useEffect(() => {
    loadData();
  });

  const renderPosts = posts.map((post) => {
    return (
      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  });

  return <>{renderPosts}</>;
};

export default App;
