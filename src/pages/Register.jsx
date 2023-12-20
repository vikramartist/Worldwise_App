import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Register.module.css";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.register}>
      <Navbar />
      <section>
        <form onSubmit={(e) => handleRegister(e)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Register</button>
        </form>
        <span>
          Already have an account? <NavLink to={"/login"}>Login</NavLink>
        </span>
      </section>
    </div>
  );
};

export default Register;
