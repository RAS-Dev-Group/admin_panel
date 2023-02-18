import { useContext, useEffect, useState } from "react";
import { loginFields } from "../../data/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { login } from '../../utils/api';
import { useNavigate } from "react-router-dom";
import { TokenDispatchContext } from "../../context/TokenContext";
import Swal from "sweetalert2";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const dispatch = useContext(TokenDispatchContext);
  const [loginState, setLoginState] = useState(fieldsState);
  const [isWaiting, setIsWaiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // check cookie first
  }, []);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = async () => {
    let loginFields = {
      username: loginState['username'],
      password: loginState['password']
    };
    setIsWaiting(true);
    login(loginFields)
      .then(res => {
        setIsWaiting(false);
        dispatch({
          type: 'set',
          token: res.data.access_token
        });
        navigate('/erp');
      })
      .catch(err => {
        setIsWaiting(false);
        // notify user that login failed
        console.log(err);
        Swal.fire(
          'Error',
          err.message,
          'error'
        );
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      {/*<FormExtra />*/}
      {isWaiting ? <div className="text-center">Signing in ...</div> : <FormAction handleSubmit={handleSubmit} text="Login" />}
    </form>
  );
}
