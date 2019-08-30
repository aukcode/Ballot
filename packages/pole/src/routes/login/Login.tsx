import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';

interface LoginProps {}

const Login = (props: LoginProps) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleOnClick = () => {};

  return (
    <div>
      <h1>Login</h1>
      <p>Enter your login credentials</p>
      <form>
        <label>
          Username:
          <input type="text" id="username" name="username" required />
        </label>
        <label>
          Password:
          <input type="text" id="password" name="password" />
        </label>
        <input type="submit" value="Submit" onClick={handleOnClick} />
      </form>
    </div>
  );
};

export const LoginComponent = withRouter(Login);
