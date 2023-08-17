import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';
import logo from '../../assets/eventOrange.svg';
import { NavLink } from 'react-router-dom';


export default function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.currentUser)
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);
  const [useDemo, setUseDemo] = useState(false);


  if (sessionUser) return <Redirect to='/' />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors([]);
    if (useDemo) {
      // Sign in as Eisenhower.
      setEmail('eisenhower@ike.com');
      setPassword('ilikeike');
      return dispatch(sessionActions.login({ email, password }))
    } else {
      dispatch(sessionActions.signup({ email, password }))
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
        });
    }
  }



  return (
    <>
      <div className='form-container'>
        <div className='container-wrapper'>
          <div className='form-title'>
            <div className='title-left'>
              <NavLink exact to='/'><img src={logo} /></NavLink>
              <h1>Create an account</h1>
            </div>
            <div className='title-right'>
              <NavLink exact to='/login'>Log in</NavLink>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              {/* <label htmlFor='email'>Email
              </label> */}
              <input
                type='email'
                placeholder='Email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='name-container'>
              <div className='name-input firstname'>
                {/* <label htmlFor='first-name'>First Name
                </label> */}
                <input
                  type='text'
                  placeholder='First Name'
                  id='first-name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className='name-input'>
                {/* <label htmlFor='surname'>Surname
                </label> */}
                <input
                  type='text'
                  placeholder='Surname'
                  id='surname'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='input-container'>
              {/* <label htmlFor='password'>Password
              </label> */}
              <input
                type='password'
                placeholder='Password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='input-container'>
              <button>Create account</button>
            </div>
            <div className='input-container'>
              <button onClick={(e) => setUseDemo(true)}>Demo User</button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}
