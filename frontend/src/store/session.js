import csrfFetch from './csrf.js';

export const LOGIN_USER = 'session/LOGIN_USER';
export const LOGOUT_USER = 'session/LOGOUT_USER';

const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user
})

const logoutUser = () => ({
  type: LOGOUT_USER
})

const storeCurrentUser = user => {
  if (user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    sessionStorage.removeItem('currentUser')
  }
}

export const signup = (user) => async dispatch => {
  const { email, password } = user;
  const res = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  });
  const newUser = await res.json();
  storeCurrentUser(newUser);
  dispatch(loginUser(newUser));
  return res;
}

export const login = ({ email, password }) => async dispatch => {
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  const user = await res.json();
  storeCurrentUser(user);
  dispatch(loginUser(user));
}

export const logout = () => async dispatch => {
  const response = await csrfFetch('/api/session', {
    method: "DELETE"
  });
  storeCurrentUser(null);
  dispatch(logoutUser());
  return response;
};

const sessionReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { currentUser: action.payload }
    case LOGOUT_USER:
      return { currentUser: null }
    default:
      return state
  }
}

export default sessionReducer
