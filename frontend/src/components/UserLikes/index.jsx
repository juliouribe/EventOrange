import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserLikeItem from "../UserLikeItem";
import { fetchLikedEvents, getEvents } from "../../store/events";
import "./UserLikes.css";
import { Redirect } from "react-router-dom";
import { getLikes } from "../../store/likes";


export default function UserLikes() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser);
  const eventsObj = useSelector(getEvents());
  const events = Object.values(eventsObj);
  const likes = Object.values(useSelector(getLikes()));
  events.sort((a, b) => {
    return new Date(a.startTime) - new Date(b.startTime);
  });

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchLikedEvents());
    }
  }, [dispatch]);

  // Redirect user to login page if they are not logged in.
  if (!currentUser) return <Redirect to='/login' />;

  return (
    <>
      <div className="like-container">
        <div className="like-header">
          <h1>Likes</h1>
        </div>
        <div className="liked-events">
          {events.map((event, idx) => {
            const like = likes.find(like => like.eventId === event.id)
            const eventLiked = (like === undefined ? false : true);
            return <UserLikeItem
              key={event.id} event={event} idx={idx} likeId={eventLiked ? like.id : null}
            />
          })}
        </div>
      </div>
    </>
  )
}
