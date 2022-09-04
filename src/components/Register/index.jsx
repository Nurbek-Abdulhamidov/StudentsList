import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, RegisterBtn, Wrapper } from "./style";

const Register = () => {
  const [data, setData] = useState([]);
  const loginRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const roleRef = useRef("");
  const passRef = useRef("");
  const rePassRef = useRef("");

  const getData = () => {
    fetch(`https://houzing-app.herokuapp.com/api/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify({
        email: `${emailRef}`,
        firstname: "string",
        lastname: "string",
        password: "string",
        roleIdSet: [1],
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, [loginRef]);
  console.log(data);

  return (
    <Wrapper>
      <Container>
        <h2>Register</h2>
        <form>
          <label>
            <span>Login</span>
            <input ref={loginRef} type="text" />
          </label>
          {/* <label>
            <span>First name</span>
            <input ref={firstNameRef} type="text" />
          </label>
          <label>
            <span>Last Name</span>
            <input ref={lastNameRef} type="text" />
          </label>
          <label>
            <span>Email</span>
            <input ref={emailRef} type="text" />
          </label>
          <label>
            <span>User role</span>
            <select ref={roleRef} name="" id="">
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <label>
            <span>Password</span>
            <input ref={passRef} type="text" />
          </label>
          <label>
            <span>Re-enter password</span>
            <input ref={rePassRef} type="text" />
          </label> */}
        </form>
        {/* {data?.map((value) => (
          <h1>{value.address}</h1>
        ))} */}
        <RegisterBtn>
          <Button type="submit" onClick={getData}>
            Register
          </Button>
        </RegisterBtn>
      </Container>
    </Wrapper>
  );
};

export default Register;

// {
//   method: "POST",
//   headers: {
//     "Content-Type": "aplication.json",
//   },
//   body: JSON.stringify({
//     login: loginRef,
//     firstName: firstNameRef,
//     lastNameRef: lastNameRef,
//     emailRef: emailRef,
//     roleRef: roleRef,
//     passRef: passRef,
//     rePassRef: rePassRef,
//   }),
// }
