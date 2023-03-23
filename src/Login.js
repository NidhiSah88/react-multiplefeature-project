import "./styles.css";
// npx create-react-app blog
// import Users from "./Users";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [pasErr, setPasErr] = useState(false);
  const navigate = useNavigate();

  function handleform(e) {
    console.log("hi");
    e.preventDefault();
    if (user.length < 3 || pass.length < 3) {
      alert("invalid input");
    } else {
      alert("all good");
    }
    // api call in react, login details for success
    //   {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }
    axios
      .post("https://reqres.in/api/login", {
        email: user,
        password: pass
      })
      .then((result) => {
        console.log(result.data);
        alert("success login");
        // set/save token in local storage after successfull login
        localStorage.setItem("token", result.data.token);
        // navigate to home page
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleUser(e) {
    let val = e.target.value;
    console.log(val);
    if (val.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    // set value in state user
    setUser(val);
  }
  function hadlePass(e) {
    let pas = e.target.value;
    console.log(pas);
    if (pas.length < 3) {
      setPasErr(true);
    } else {
      setPasErr(false);
    }
    // set value in state pass
    setPass(pas);
  }
  return (
    <div className="App">
      {/* <Users/> */}
      <h1> Login form</h1>
      <form onSubmit={handleform}>
        <input type="text" placeholder="enter name" onChange={handleUser} />
        {userErr ? <span>Enter value greater than 3 </span> : ""}
        <br />
        <br />
        {/* // to display what user types in input box */}
        {user}
        <input
          type="password"
          placeholder="enter password"
          onChange={hadlePass}
        />
        {pasErr ? <span>Enter password greater than 3 </span> : ""}
        <br />
        <br />
        {pass}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
