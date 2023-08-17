import LoginFormPage from './components/LoginFormPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';



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
        <Route exact path='/'>
          <Navigation />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>

    </>
  );
}

export default App;
