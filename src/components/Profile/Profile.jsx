import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/12906178/pexels-photo-12906178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
