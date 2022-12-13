import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "My Post 1", likesCount: 12 },
    { id: 2, message: "My Post 2", likesCount: 11 },
    { id: 3, message: "My Post 3", likesCount: 8 },
    { id: 4, message: "My Post 4", likesCount: 15 },
    { id: 5, message: "My Post 5", likesCount: 32 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <button>Remove</button>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
