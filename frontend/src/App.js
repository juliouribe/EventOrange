import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from './store/session'
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";



function App() {
  const dispatch = useDispatch();



  return (
    <>
      <Navigation />
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
      </Switch>
      <h1>Lasagna for dinner tonight!!!!</h1>
      <img src="https://i.pinimg.com/474x/3a/dc/92/3adc92551b1495bf31039bc637335603.jpg"></img>
    </>
  );
}

export default App;
