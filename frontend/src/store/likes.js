import csrfFetch from "./csrf";

export const RECEIVE_LIKES = 'likes/RECEIVE_LIKES';
export const RECEIVE_LIKE = 'likes/RECEIVE_LIKE';
export const REMOVE_LIKE = 'likes/REMOVE_LIKE';

// Actions
const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes
})

const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
})

const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId
})

// Selectors
export const getLikes = () => state => state.entities.likes

export const getLike = (likeId) => state => {
  return state.entities.likes ? state.entities.likes[likeId] : null
}

// Thunk actions
export const fetchLikes = () => async dispatch => {
  const res = await csrfFetch('/api/likes')
  const likes = await res.json();
  dispatch(receiveLikes(likes));
}

export const fetchLike = (likeId) => async dispatch => {
  const res = await csrfFetch(`/api/likes/${likeId}`)
  const like = await res.json();
  dispatch(receiveLike(like));
}

export const createLike = (eventId) => async dispatch => {
  const res = await csrfFetch('/api/likes', {
    method: 'POST',
    body: JSON.stringify(eventId)
  })
  const newLike = await res.json();
  dispatch(receiveLike(newLike));
}

export const deleteLike = (eventId, likeId) => async dispatch => {
  const res = await csrfFetch(`/api/likes/${eventId}`, {
    method: 'DELETE'
  })
  dispatch(removeLike(likeId));
}

// Reducer
const likeReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LIKES:
      return { ...action.likes }
    case RECEIVE_LIKE:
      return {
        ...state,
        [action.like.id]: action.like
      }
    case REMOVE_LIKE:
      const newState = { ...state }
      delete newState[action.likeId]
      return newState
    default:
      return state
  }
}

export default likeReducer
