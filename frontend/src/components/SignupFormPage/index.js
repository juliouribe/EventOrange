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

  if (sessionUser) return <Redirect to='/' />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors([]);
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
    // Error stuff
    // <ul>
    //     {formErrors.map(error => <li key={error}>{error}</li>)}
    //   </ul>
  };



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
                placeholder='Enter Email'
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
                  placeholder='Enter First Name'
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
                  placeholder='Enter Surname'
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
                placeholder='Enter Password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='input-container'>
              <button>Create account</button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}
