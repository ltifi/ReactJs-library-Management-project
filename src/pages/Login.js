import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

import {
  Card,
  Form,
  Input,
  Button,
} from "../components/adherent/authForm/AuthForm";

const Login = (props) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("ListAdherents"))
      ? JSON.parse(localStorage.getItem("ListAdherents"))
      : []
  );
  var load;

  const handleLogin = () => {
    if (email === "admin1234@gmail.com" && password === "admin") {
      load = "1";
      history.push(`/adminlayout`);
      localStorage.setItem("token", "loggedin");
    } else if (
      users.some((e) => e.email === email) &&
      users.some((e) => e.password === password)
    ) {
      load = users.find((element) => email === element.email).id_user;

      console.log(typeof load);
      console.log(load, "lll");

      history.push(`HomePage/${load}`);
      localStorage.setItem("token", "loggedin");
    } else if (!load) {
      setEmail("");
      setPassword("");
      alert("Email or password is incorrect !!!");
    }

    return "/";
  };
  return (
    <div className="Login">
      <Card>
        <Form>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Sign In</Button>
        </Form>
        <Link to="/signup">Don't have an account?</Link>
      </Card>
    </div>
  );
};

export default Login;
