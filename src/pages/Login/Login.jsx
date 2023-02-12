import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import axios from "axios";

class FluidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: "",
    };
  }

  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused,
    });
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value,
    });
  }

  render() {
    const { type, label, style, id } = this.props;
    const { focused, value } = this.state;

    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value !== "") {
      inputClass += " fluid-input--open";
    }

    return (
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">
          <input
            className="fluid-input-input"
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}
            autoComplete="off"
          />
          <label className={"fluid-input-label" + (this.state.value ? ' invisible' : '')} forhtml={id}>
            {label}
          </label>
        </div>
      </div>
    );
  }
}

function Button({ buttonClass, onClick, buttonText }) {
  return (
    <div
      className={`button ${buttonClass}`}
      onClick={onClick}
    >
      {buttonText}
    </div>
  );
}

export default function LoginContainer() {
  const style = {
    margin: "15px 0",
  };

  const navigate = useNavigate();
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });

  function handleSubmit(e) {
    navigate('/erp/project');
    return false;

    setAppState({ loading: true });
    e.preventDefault();
    axios.post('https://furniture-dusky.vercel.app/token', {
      name: 'bipin',
      password: 'Bipin@123'
    })
      .then((data) => {
        setAppState({ loading: false });
        console.log(data);
        // store data.access_token ; we will use this for ...
        navigate('/erp/project');
      })
      .catch((err) => {
        console.log(err.messag);
      });
  }

  return (
    <div className="flex h-screen login-page">
      <form className="login-container">
        <div className="title">Login</div>
        <FluidInput type="text" label="name" id="name" style={style} />
        <FluidInput
          type="password"
          label="password"
          id="password"
          style={style}
        />
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