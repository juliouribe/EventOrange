import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.currentUser)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() lets you read the response twice.
          data = await res.clone().json();
        } catch {
          // We'll hit this case if the server is down.
          data = await res.text();
        }
        console.log(data);
        console.log("hey look here")
        // We hit the first case if we have an invalid form.
        if (data?.errors) {
          setFormErrors([data.errors]);
        } else if (data) {
          setFormErrors([data]);
        } else {
          setFormErrors([res.statusText]);
        }
      });
  };



  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {formErrors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label>Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>Password:
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button>Log In</button>
      </form>

    </>
  )
}
