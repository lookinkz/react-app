import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="2" />
        <Post message="It's my first post" likesCount="23" />
        <Post message="Good! Good!" likesCount="15" />
        <Post message="Fine! Fine!" likesCount="9" />
      </div>
    </div>
  );
};

export default MyPosts;
