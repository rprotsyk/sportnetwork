import React from 'react';
import './login.scss';

export interface LoginProps {}

export const Login = (props: LoginProps) => {
  return (
    <div>
      <h1>Welcome to login! <span>🎉</span></h1>
    </div>
  );
};

export default Login;
