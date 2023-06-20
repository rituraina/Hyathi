import React, {  useState } from "react";
import { Link} from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");



  return (
    <div className="log-Head"> 
      <section className="login">
      <h1 className="d-flex justify-content-center">Signup</h1>
      <h4 className="d-flex justify-content-center align-items-center">Let's create account</h4>
        <form onSubmit="">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <input
            type="password"
            required
            placeholder="Confirm Password"
            value={Cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button type="submit" onClick="">Sign Up</button>
          <b>Or</b>
          <Link className="links" to="/login">Log In</Link>
        </form>
      </section>
 
    </div>
  );
};

 
 export default Signup;