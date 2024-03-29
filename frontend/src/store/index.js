import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import sessionReducer from "./session";
import eventReducer from "./events";
import ticketReducer from "./tickets";
import likeReducer from "./likes";

const entitiesReducer = combineReducers({
  events: eventReducer,
  tickets: ticketReducer,
  likes: likeReducer
})

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer
})


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
