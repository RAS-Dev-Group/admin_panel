import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import API from '../../utils/api';

function FluidInput({ type, label, id, defValue = '', onChange }) {
  let [focused, setFocused] = useState(false);
  let [value, setValue] = useState(defValue);

  function focusField() {
    setFocused(!focused);
  }

  function handleChange(event) {
    setValue(event.target.value);
    onChange(value);
  }

  return (
    <div className={"fluid-input !my-4" + (focused ? ' fluid-input--focus' : (value !== '' ? ' fluid-input--open' : ''))}>
      <div className="fluid-input-holder">
        <input
          className="fluid-input-input"
          type={type}
          id={id}
          onFocus={focusField}
          onBlur={focusField}
          onChange={handleChange}
          value={value}
          autoComplete="off"
        />
        <label className={"fluid-input-label" + (value ? ' invisible' : '')} forhtml={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

function Button({ buttonClass, onClick, buttonText }) {
  return (
    <button
      className={`button ${buttonClass}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default function LoginContainer() {
  const navigate = useNavigate();
  const [appState, setAppState] = useState({
    loading: false,
    name: 'bipin',
    password: 'Bipin@123'
  });

  function onNameChange(name) {
    setAppState({ ...appState, name });
  }

  function onPasswordChange(password) {
    setAppState({ ...appState, password });
  }

  function handleSubmit(e) {
    const loginData = new FormData();
    loginData.append('username', appState.name);
    loginData.append('password', appState.password);

    console.log(appState);

    if (!appState.name) {
      alert('Please input name');
      return;
    }

    if (!appState.password) {
      alert('Please input password');
      return;
    }

    setAppState({ ...appState, loading: true });
    e.preventDefault();
    API.post("/token", loginData)
      .then((data) => {
        setAppState({ ...appState, loading: false });
        console.log('response', data);
        // store data.access_token ; we will use this for ...
        if (data.error) {
          alert(data.error);
          return;
        }
        else {
          alert('You are logged in');
          // save access_token to somewhere (for global use)
          console.log('token', data.access_token);
          navigate('erp/project');
          return;
        }
      })
      .catch((err) => {
        console.log(err.messag);
      });
  }

  return (
    <div className="flex h-screen login-page">
      <form className="login-container">
        <div className="title">Login</div>
        <FluidInput type="text" label="name" id="name" defValue={appState.name} onChange={onNameChange} />
        <FluidInput type="password" label="password" id="password" defValue={appState.password} onChange={onPasswordChange} />
        <Button
          buttonText="log in"
          onClick={handleSubmit}
          buttonClass="login-button"
        />
      </form>
    </div>
  );
}

/*
sample authentication

bipin
Bipin@123
*/