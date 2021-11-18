import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(user);

      const res = await axios.post("/auth", body, config);

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
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <h1>Log In</h1>
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
          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary marginTopS"
            />
          </div>
        </form>
        <p className="my-1">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
