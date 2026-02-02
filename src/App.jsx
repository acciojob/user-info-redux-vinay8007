import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "./actions/userActions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state);

  return (
    <div className="app">
      <div className="container">
        <h1>User Information</h1>

        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => dispatch(updateName(e.target.value))}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </div>

        {/* ✅ REQUIRED BY CYPRESS */}
        <div className="output" style={{ marginTop: "20px" }}>
          <p><strong>Current values in store:</strong></p>
          <p>Name - {name}</p>
          <p>Email - {email}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
