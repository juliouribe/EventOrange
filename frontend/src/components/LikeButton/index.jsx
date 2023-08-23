import React, { useState } from "react";
import "./LikeButton.css";
import { useDispatch } from "react-redux";
import { createLike, deleteLike } from "../../store/likes";

export default function LikeButton({ eventId, defaultLike }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(defaultLike);

  const toggleLike = (e) => {
    e.preventDefault();
    if (liked) {
      dispatch(createLike({ eventId: eventId }));
    } else {
      dispatch(deleteLike(eventId));
    }
    setLiked(!liked);
  }

  return (
    <div className="like-icon-container">
      <i className="fa-solid fa-heart like-icon ${liked?  'liked': 'not-liked'}" onClick={toggleLike}></i>
    </div>
  )
}
