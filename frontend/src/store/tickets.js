import csrfFetch from "./csrf";

export const RECEIVE_TICKETS = 'tickets/RECEIVE_TICKETS';
export const RECEIVE_TICKET = 'tickets/RECEIVE_TICKET';

export const REMOVE_TICKET = 'tickets/REMOVE_TICKET';

// Actions
const receiveTickets = (tickets) => ({
  type: RECEIVE_TICKETS,
  tickets
})

const receiveTicket = (ticket) => ({
  type: RECEIVE_TICKET,
  ticket
})

const removeTicket = (ticketId) => ({
  type: REMOVE_TICKET,
  ticketId
})

// Selectors
export const getTickets = () => state => state.entities.tickets

export const getTicket = (ticketId) => state => {
  return state.entities.tickets ? state.entities.tickets[ticketId] : null
}

// Thunk actions
export const fetchTickets = () => async dispatch => {
  const res = await csrfFetch('/api/tickets')
  const tickets = await res.json();
  dispatch(receiveTickets(tickets));
}

export const fetchTicket = (ticketId) => async dispatch => {
  const res = await csrfFetch(`/api/tickets/${ticketId}`)
  const ticket = await res.json();
  dispatch(receiveTicket(ticket));
}

export const createTicket = (ticket) => async dispatch => {
  const res = await csrfFetch('/api/tickets', {
    method: 'POST',
    body: JSON.stringify(ticket)
  })
  const newTicket = await res.json();
  dispatch(receiveTicket(newTicket));
}

export const deleteTicket = (ticketId) => async dispatch => {
  const res = await csrfFetch(`/api/tickets/${ticketId}`, {
    method: 'DELETE'
  })
  dispatch(removeTicket(ticketId));
}

// Reducer
const ticketReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TICKETS:
      return { ...action.tickets }
    case RECEIVE_TICKET:
      return { ...state, [action.ticket.id]: action.ticket }
    case REMOVE_TICKET:
      const newState = { ...state }
      delete newState[action.ticketId]
      return newState
    default:
      return state
  }
}

export default ticketReducer
