import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // api call in react
  // useEffect(() => {
  //   // we wrote code here so that when this
  //   // component load this code run immediately

  //   // if user not login navigate to login page
  //   if (!localStorage.getItem("token")) {
  //     console.log("if called if not token 1");

  //     navigate("/login");
  //   }

  //   // api call in react
  //   axios
  //     .get("https://reqres.in/api/users?pages=1")
  //     .then((res) => {
  //       console.log("succes", res.data);
  //       // set user list data in state data
  //       setData(res?.data?.data);
  //     })
  //     .catch((err) => {
  //       console.log("some error occured", err);
  //     });
  // }, []);

  // NOTE: both useeffect code output same result use either

  // async await, promise api call in react
  // in async -await we dont use .then, .catch, also to catch error we put in try-catch block

  useEffect(() => {
    // if user not login navigate to login page
    if (!localStorage.getItem("token")) {
      console.log("if called if not token");
      navigate("/login");
    }

    const getUserList = async () => {
      try {
        const res = await axios.get("https://reqres.in/api/users?pages=1");
        console.log("result:", res.data);
        // set user list data in state data
        setData(res?.data?.data);
      } catch (err) {
        console.log("some error occured", err);
      }
    };
    getUserList();
  }, []);

  return (
    <div>
      <h2>Home page </h2>
      <h2> Display user list from api & navigate user here if logged in</h2>
      <br />
      {/* // log out button */}
      <button
        onClick={() => {
          console.log("logout button clicked", localStorage.getItem("token"));
          // remove token from localstorage
          localStorage.removeItem("token");
          //navigate("/login");
          // if user not login navigate to login page
          if (!localStorage.getItem("token")) {
            console.log("if called if not token");
            navigate("/login");
          }
        }}
      >
        Log out{" "}
      </button>
      <br />
      <br /> <br />
      Table of users:
      <table>
        <tr>
          <th> ID </th>
          <th> Email </th>
          <th> First_name </th>
          <th> Last_name </th>
        </tr>
        {/* // mapping data */}
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Home;
