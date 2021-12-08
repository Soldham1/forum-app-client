import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  // Sets form data whenever user types in form text boxes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Creates new user object
    const user = {
      username,
      password,
    };

    try {
      // Sets headers
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(user);

      // Sends axios request
      const res = await axios.post("/users", body, config);

      // If successful stores token and changes location
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
        window.location.replace("/home");
      }
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="col-6">
        <h1>Register</h1>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label className="formTitle">Username</label>
            <input
              type="text"
              name="username"
              className="input-group"
              value={username}
              onChange={(e) => onChange(e)}
              required
            />
            <label className="formSubtitle">
              This will be visible by anybody
            </label>
          </div>
          <div className="form-group">
            <label className="formTitle">Password</label>
            <input
              type="password"
              name="password"
              className="input-group"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>

          <input
            type="submit"
            value="Register"
            className="btn btn-primary marginTopS"
          />
        </form>
        <p className="my-1">
          Already have an account? <a href="/">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
