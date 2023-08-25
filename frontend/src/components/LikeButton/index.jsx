import React, { useEffect, useState } from "react";
import "./LikeButton.css";
import { useDispatch, useSelector } from "react-redux";
import { createLike, deleteLike } from "../../store/likes";
import { useHistory } from "react-router-dom";


export default function LikeButton({ eventId, defaultLike = false, likeId = null }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.session.currentUser);
  const [liked, setLiked] = useState(defaultLike);

  const toggleLike = (e) => {
    e.preventDefault();
    if (!currentUser) {
      history.push("/login");
      return;
    }
    if (liked) {
      dispatch(deleteLike(eventId, likeId));
    } else {
      dispatch(createLike({ eventId: eventId }));
    }
    setLiked(!liked);
  }

  return (
    <div className="like-icon-container">
      <i className={`fa-solid fa-heart like-icon ${liked ? 'liked' : 'not-liked'}`} onClick={toggleLike}></i>
    </div>
  )
}
