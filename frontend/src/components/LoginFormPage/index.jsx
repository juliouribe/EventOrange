import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import logo from '../../assets/eventOrange.svg';
import { NavLink } from 'react-router-dom';

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  if (currentUser) return <Redirect to='/' />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors([]);
    dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) {
          setFormErrors([data.errors]);
        } else if (data) {
          setFormErrors([data]);
        } else {
          setFormErrors([res.statusText]);
        }
      })
  };

  const useDemo = (e) => {
    e.preventDefault();
    // Sign in as Eisenhower.
    dispatch(sessionActions.login({
      email: 'eisenhower@ike.com',
      password: 'ilikeike'
    }))
  }

  return (
    <>
      <div className='form-container'>
        <div className='container-wrapper'>
          <div className='form-title'>
            <div className='title-left'>
              <NavLink exact to='/'><img src={logo} /></NavLink>
              <h1>Log in</h1>
            </div>
            <div className='title-right'>
              <NavLink exact to='/signup'>Sign up</NavLink>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              <label htmlFor='email'></label>
              <input
                type='email'
                placeholder='Email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input-container'>
              <label htmlFor='password'></label>
              <input
                type='password'
                placeholder='Password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='error-container'>
              {formErrors.map(error => <p key={error}>{error}</p>)}
            </div>
            <div className='input-container'>
              <button>Log in</button>
            </div>
          </form>
          <form onSubmit={useDemo}>
            <div className='input-container'>
              <button>Demo User</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
