import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
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
      <div>
        <Post message="Hi, how are you?" likesCount="2" />
        <Post message="It's my first post" likesCount="23" />
        <Post message="Good! Good!" likesCount="15" />
        <Post message="Fine! Fine!" likesCount="9" />
      </div>
    </div>
  );
};

export default MyPosts;
