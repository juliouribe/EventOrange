import React, { useState } from "react";
import "./LikeButton.css";
import { useDispatch } from "react-redux";
import { createLike, deleteLike } from "../../store/likes";

export default function LikeButton({ eventId, defaultLike = false, likeId = null }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(defaultLike);
  console.log("inside likebutton");
  console.log(defaultLike)
  console.log(liked)
  const toggleLike = (e) => {
    e.preventDefault();
    if (liked) {
      dispatch(deleteLike(eventId, likeId));
      console.log("Deleting like")
    } else {
      dispatch(createLike({ eventId: eventId }));
      console.log("Creating like")
    }
    setLiked(!liked);
  }

  return (
    <div className="like-icon-container">
      <i className={`fa-solid fa-heart like-icon ${liked ? 'liked' : 'not-liked'}`} onClick={toggleLike}></i>
    </div>
  )
}
