import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';

export default function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.currentUser)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors([]);
    if (password === confirmPassword) {
      return dispatch(sessionActions.signup({ email, password }))
        .catch(async (res) => {
          let data;
          try {
            // .clone() lets you read the response twice.
            data = await res.clone().json();
          } catch {
            // We'll hit this case if the server is down.
            data = await res.text();
          }
          // We hit the first case if we have an invalid form.
          if (data?.errors) {
            setFormErrors([data.errors]);
          } else if (data) {
            setFormErrors([data]);
          } else {
            setFormErrors([res.statusText]);
          }
        });
    } else {
      return setFormErrors(['Passwords must match, please try again.'])
    }
  };



  return (
    <>
      <h1>Sign Up</h1>
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
        <label>Confirm Password:
          <input
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button>Sign Up</button>
      </form>
    </>
  );
}
