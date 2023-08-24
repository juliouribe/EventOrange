import csrfFetch from "./csrf";

export const RECEIVE_EVENTS = 'events/RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'events/RECEIVE_EVENT';
export const UPDATE_EVENT = 'events/UPDATE_EVENT';
export const REMOVE_EVENT = 'events/REMOVE_EVENT';

// Actions
const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
})

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
})

const updateEvent = (event) => ({
  type: UPDATE_EVENT,
  event
})

const removeEvent = (eventId) => ({
  type: REMOVE_EVENT,
  eventId
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

export const fetchPurchasedEvents = () => async dispatch => {
  const res = await csrfFetch(`/api/purchased_events`)
  const events = await res.json();
  dispatch(receiveEvents(events));
}

export const fetchLikedEvents = () => async dispatch => {
  const res = await csrfFetch(`/api/liked_events`)
  const events = await res.json();
  dispatch(receiveEvents(events));
}

export const fetchHostedEvents = () => async dispatch => {
  const res = await csrfFetch(`/api/hosted_events`)
  const events = await res.json();
  dispatch(receiveEvents(events));
}

export const fetchEvent = (eventId) => async dispatch => {
  const res = await csrfFetch(`/api/events/${eventId}`)
  const event = await res.json();
  dispatch(receiveEvent(event));
}

export const createEvent = (eventData) => async dispatch => {
  const res = await csrfFetch('/api/events', {
    method: 'POST',
    body: eventData
  })
  const newEvent = await res.json();
  dispatch(receiveEvent(newEvent));
}

export const editEvent = (eventId, eventData) => async dispatch => {
  const res = await csrfFetch(`/api/events/${eventId}`, {
    method: 'PATCH',
    body: eventData
  })
  const updatedEvent = await res.json();
  dispatch(updateEvent(updatedEvent));
}

export const deleteEvent = (eventId) => async dispatch => {
  await csrfFetch(`/api/events/${eventId}`, {
    method: 'DELETE'
  })
  dispatch(removeEvent(eventId));
}

// Reducer
const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return { ...action.events }
    case RECEIVE_EVENT:
      return {
        ...state,
        [action.event.id]: action.event
      }
    case UPDATE_EVENT:
      return {
        ...state,
        [action.event.id]: action.event
      }
    case REMOVE_EVENT:
      const newState = { ...state }
      delete newState[action.eventId]
      return newState
    default:
      return state
  }
}

export default eventReducer
