import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserLikeItem from "../UserLikeItem";
import { fetchLikedEvents, getEvents } from "../../store/events";
import "./UserLikes.css";
import { Redirect } from "react-router-dom";


export default function UserLikes() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser);
  const eventsObj = useSelector(getEvents());
  const events = useMemo(() => Object.values(eventsObj));
  events.sort((a, b) => {
    return new Date(a.startTime) - new Date(b.startTime);
  });

  useEffect(() => {
    dispatch(fetchLikedEvents());
  }, []);

  // Redirect user to home page if they are not logged in.
  if (!currentUser) return <Redirect to='/' />;

  return (
    <>
      <div className="like-container">
        <div className="like-header">
          <h1>Likes</h1>
        </div>
        <div className="liked-events">
          {events.map((event, idx) => {
            return <UserLikeItem key={event.id} event={event} idx={idx} />
          })}
        </div>
      </div>
    </>
  )
}
