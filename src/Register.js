import React from "react";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleEmail(e) {
    console.log(e.target.value);
    setUser(e.target.value);
  }
  function handlePass(e) {
    setPass(e.target.value);
  }
  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/register", {
        email: user,
        password: pass
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1> SIGN UP from register</h1>
      <h2>{user}</h2>
      <h2>{pass}</h2>
      <form onSubmit={handleRegister}>
        Email/username:
        <input
          type="email"
          required={true}
          placeholder="email"
          onChange={handleEmail}
        />
        <br />
        Password:
        <input
          type="password"
          required={true}
          placeholder="password"
          onChange={handlePass}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;
