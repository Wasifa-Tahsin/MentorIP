import React, { useEffect, useState } from "react";

import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("cartData.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className=" mt-15 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-5 gap-7">
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
