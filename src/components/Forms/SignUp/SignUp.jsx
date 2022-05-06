import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../redux/actions/userAction';
import './SignUp.sass';

function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    email: '',
    password: '',
    name: '',
  });

  const navigate = useNavigate();
  
  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signUp(payload, navigate));
    }
  };

  return (
    <div className="signUp-wrapper">
      <form onSubmit={submitHandler} className="signForm  signUp-wrapper__form">
        <legend>Зарегистрироваться</legend>
        <div className="mb-3 signForm__box">
          <label htmlFor="email-input" className="signForm__lable">
            Email
          </label>
          <input
            onChange={changeHandler}
            className="signForm__input"
            value={userSignUp.email}
            type="email"
            name="email"
            id="email-input"
          />
        </div>

        <div className="mb-3 signForm__box">
          <label htmlFor="name-input" className="signForm__lable">
            Имя
          </label>
          <input
            onChange={changeHandler}
            className="signForm__input"
            value={userSignUp.name}
            type="text"
            name="userName"
            id="name-input"
          />
        </div>

        <div className="mb-3 signForm__box">
          <label htmlFor="password-input" className="signForm__lable">
            Password
          </label>
          <input
            onChange={changeHandler}
            className="signForm__input"
            value={userSignUp.password}
            type="password"
            name="password"
            id="password-input"
          />
        </div>

        <button type="submit" className="signForm__submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default SignUp;
