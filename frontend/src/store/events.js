import csrfFetch from "./csrf";

export const RECEIVE_EVENTS = 'events/RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'events/RECEIVE_EVENT';

// Actions
const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
})

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
})

// Selectors
export const getEvents = () => state => state.entities.events

export const getEvent = (eventId) => state => {
  return state.entities.events ? state.entities.events[eventId] : null
}

// Thunk actions
export const fetchEvents = () => async dispatch => {
  const res = await csrfFetch('/api/events')
  const events = await res.json();
  dispatch(receiveEvents(events));
}

export const fetchEvent = (eventId) => async dispatch => {
  const res = await csrfFetch(`/api/events/${eventId}`)
  const event = await res.json();
  dispatch(receiveEvent(event));
}

// Reducer
const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return { ...action.events }
    case RECEIVE_EVENT:
      return { ...action.event }
    default:
      return state
  }
}

export default eventReducer
