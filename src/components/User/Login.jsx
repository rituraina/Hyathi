import React, { useState } from "react";
import { Link} from "react-router-dom";
import "./login.css";

const Login = () => {
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="formm">
      <section className="container">
        <h1 className="log">Login</h1>
        <h4 className="d-flex justify-content-center align-items-center">
           Welcome
        </h4>
        <form onSubmit="">
          <input
            className="input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button   type="submit">
            Login
          </button>
          <h4>Or</h4>
          <Link className="links" to="/signup">
            Sign Up
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
