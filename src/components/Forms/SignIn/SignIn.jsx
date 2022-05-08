import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../redux/actions/userAction';
import './SignIn.sass';

function SignIn() {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const from = { pathname: '/' };

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignIn).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signIn(payload, navigate, from));
    }
  };

  return (
    <div className="signIn-wrapper">
      <form onSubmit={submitHandler} className="signForm signIn-wrapper__form">
        <legend>Войти</legend>
        <div className="mb-3 signForm__box">
          <label htmlFor="email-input" className="signForm__lable">
            Email
          </label>
          <input
            onChange={changeHandler}
            className="signForm__input"
            value={userSignIn.email}
            type="email"
            name="email"
            id="email-input"
          />
        </div>

        <div className="mb-3 signForm__box">
          <label htmlFor="password-input" className="signForm__lable">
            Password
          </label>
          <input
            onChange={changeHandler}
            className="signForm__input"
            value={userSignIn.password}
            type="password"
            name="password"
            id="password-input"
          />
        </div>

        <button type="submit" className="signForm__submit">
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default SignIn;
