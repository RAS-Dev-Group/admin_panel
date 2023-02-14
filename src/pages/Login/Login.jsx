import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import API from '../../utils/api';
import { Loader } from "react-feather";

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
    isLoading: false,
    name: 'bipin',
    password: 'Bipin@123'
  });

  function onNameChange(name) {
    setAppState({ name });
  }

  function onPasswordChange(password) {
    setAppState({ password: password });
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

    setAppState({ isLoading: true });
    e.preventDefault();
    API.post("/token", loginData)
      .then((data) => {
        setAppState({ isLoading: false });
        console.log('response', data);
        // store data.access_token ; we will use this for ...
        if (data.error) {
          alert(data.error);
          return;
        }
        else {
          // save access_token to somewhere (for global use)
          console.log('login success ; token', data.access_token);
          navigate('erp/project');
          return;
        }
      })
      .catch((err) => {
        console.log(err.messag);
      });
  }

  return (
    <>
      <div className="flex h-screen login-page">
        <form className="login-container">
          <div className="title">Login</div>
          <FluidInput type="text" label="name" id="name" defValue={appState.name} onChange={onNameChange} />
          <FluidInput type="password" label="password" id="password" defValue={appState.password} onChange={onPasswordChange} />
          {appState.isLoading ?
            <div
              style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
            </div> :
            <Button
              buttonText="log in"
              onClick={handleSubmit}
              buttonClass="login-button"
            />
          }
        </form>
      </div>
    </>
  );
}
