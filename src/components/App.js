import React from "react";
import Route from "../components/Route";
import ProtectedRoute from "../components/ProtectedRoute";
import LoginForm from "./auth/LoginForm";
import RegistrationForm from "./auth/RegistrationForm";
import Home from "./home/Home";

const App = () => {
  return (
    <div>
      <Route path="/">
        <LoginForm />
      </Route>
      <Route path="/register">
        <RegistrationForm />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
};

export default App;
