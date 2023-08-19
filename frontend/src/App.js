import LoginFormPage from './components/LoginFormPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation/';
import EventIndex from './components/EventIndex';
import EventShow from './components/EventShow';
import SplashPage from './components/SplashPage';

function App() {

  return (
    <>
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        <Route path='/events/:eventId'>
          <Navigation />
          <EventShow />
        </Route>
        <Route exact path='/'>
          <Navigation />
          <SplashPage />
          <EventIndex />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </>
  );
}

export default App;
