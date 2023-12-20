import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.login}>
      <Navbar />
      <section>
        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
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
          <button className={styles.user}>Login</button>
        </form>
        <span>
          Don&apos;t have an account?{" "}
          <NavLink to={"/register"}>Join Us</NavLink>
        </span>
      </section>
    </div>
  );
};

export default Login;
