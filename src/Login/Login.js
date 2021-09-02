import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__image">
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Facebook_Logo_%282015%29_light.svg/2880px-Facebook_Logo_%282015%29_light.svg.png"
          alt=""
          className="title"
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign Up
      </Button>
    </div>
  );
};

export default Login;
