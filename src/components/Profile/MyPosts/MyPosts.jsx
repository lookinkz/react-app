import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "My Post 1", likesCount: 12 },
    { id: 2, message: "My Post 2", likesCount: 11 },
    { id: 3, message: "My Post 3", likesCount: 8 },
    { id: 4, message: "My Post 4", likesCount: 15 },
    { id: 5, message: "My Post 5", likesCount: 32 },
  ];

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
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
        <Post
          message={postData[2].message}
          likesCount={postData[2].likesCount}
        />
        <Post
          message={postData[3].message}
          likesCount={postData[3].likesCount}
        />
        <Post
          message={postData[4].message}
          likesCount={postData[4].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
