import Navbar from "../components/Navbar";
import styles from "./Login.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("vikram@gmail.com");
  const [password, setPassword] = useState("vikru789@");

  // eslint-disable-next-line no-unused-vars
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/app/cities", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

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
      </section>
    </div>
  );
};

export default Login;
