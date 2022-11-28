import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1296"
        alt=""
      />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
