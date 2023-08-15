import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from './store/session'
import { Route, Switch } from 'react-router-dom';



function App() {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/'>
          <button onClick={logout}>Log Out</button>
        </Route>
      </Switch>
      <h1>Lasagna for dinner tonight!!!!</h1>
      <img src="https://i.pinimg.com/474x/3a/dc/92/3adc92551b1495bf31039bc637335603.jpg"></img>
    </>
  );
}

export default App;
