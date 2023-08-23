import { useDispatch } from "react-redux";
import { fetchEvent, getEvents } from "../../store/events";


export default function UserLikes() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser);
  
}
