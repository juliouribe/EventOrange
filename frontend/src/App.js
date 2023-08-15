import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from './store/session'


function App() {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <LoginFormPage />
      <button onClick={logout}>Log Out</button>
      <h1>Lasagna for dinner tonight!!!!</h1>
      <img src="https://i.pinimg.com/474x/3a/dc/92/3adc92551b1495bf31039bc637335603.jpg"></img>
    </>
  );
}

export default App;
