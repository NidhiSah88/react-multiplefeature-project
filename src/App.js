import "./styles.css";
import Home from "./Home.js";
import Login from "./Login";
import Register from "./Register";
import Dynamicinput from "./Dynamicinput";
import ImageUpload from "./ImageUpload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// npx create-react-app blog
// import Users from "./Users";
export default function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      <h1> From app.js</h1>
      {/* CODE refrence: https://www.youtube.com/watch?v=Xc_MPV9EtNs&list=PLRzDZcVlPhe3WhTHvWawV4WvxT2585BrG&index=4
      saifi code */}
      <h3>Register, Login & Logout, navigationguard feature </h3>
      <h3>
        {" "}
        get-post api, useEffect, async-await, userlist displayed from api
      </h3>
      <h3> image upload dynamic add-remove input field</h3>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dynamicinput" element={<Dynamicinput />} />
          <Route path="/imageUpload" element={<ImageUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
