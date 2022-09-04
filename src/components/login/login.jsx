import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Login = () => {
  const getUsers = (id) => {
    return fetch(`https://houzing-app.herokuapp.com/api/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    }).then((res) => res.json());
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");
  return (
    <div>
      <span>
        email <input ref={emailRef} type="text" />
      </span>
      <span>
        password <input ref={passwordRef} type="password" />
      </span>
      <button onClick={getUsers}>login</button>
    </div>
  );
};

export default Login;
