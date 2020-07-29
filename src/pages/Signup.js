import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchUsers, handleClick } from "../services/user.service";
import {
  Card,
  Form,
  Input,
  Button,
} from "../components/adherent/authForm/AuthForm";
import "./Signup.css";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nameError, setNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const history = useHistory();
  const [load, setLoad] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchUsers();

      if (!JSON.parse(localStorage.getItem("DemandesAdh"))) {
        localStorage.setItem("DemandesAdh", JSON.stringify(result));
      }
    };

    fetchData();
  }, []);
  const validate = () => {
    if (name !== "" && userName !== "" && email !== "" && password !== "") {
      return true;
    } else {
      setName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setPassword2("");
      return false;
    }
  };

  return (
    <div className="Signup">
      <Card>
        <Form>
          <Input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            placeholder="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

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

          <Input
            type="password"
            placeholder="password again"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />

          <Button
            onClick={() =>
              handleClick(name, userName, email, password, validate, history)
            }
          >
            Sign Up
          </Button>
        </Form>
        <Link to="/">Already have an account?</Link>
      </Card>
    </div>
  );
}

export default Signup;
