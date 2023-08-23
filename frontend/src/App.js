import LoginFormPage from './components/LoginFormPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation/';
import EventIndex from './components/EventIndex';
import EventShow from './components/EventShow/';
import SplashPage from './components/SplashPage';
import EventCreate from './components/EventCreate';
import EventEdit from './components/EventEdit';
import UserHostedEvents from './components/UserHostedEvents';
import UserLikes from './components/UserLikes';
import UserTickets from './components/UserTickets';

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
        <Route path='/events/create'>
          <Navigation />
          <EventCreate />
        </Route>
        <Route path='/events/edit/:eventId'>
          <Navigation />
          <EventEdit />
        </Route>
        <Route path='/events/:eventId'>
          <Navigation />
          <EventShow />
        </Route>
        <Route path='/user/hosted-events'>
          <Navigation />
          <UserHostedEvents />
        </Route>
        <Route path='/user/purchased-events'>
          <Navigation />
          <UserTickets />
        </Route>
        <Route path='/user/liked-events'>
          <Navigation />
          <UserLikes />
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
