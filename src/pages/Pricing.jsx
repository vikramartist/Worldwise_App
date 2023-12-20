import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div className={styles.pricing}>
      <Navbar />
      <section>
        <article>
          <h1>
            Simple Pricing. <br /> Just 9$/month.
          </h1>
          <span>
            We offer a Simple Pricing of 9$/ month for much more services, do
            join our community and explore the world of various nationalities.
            <br />
            Try out a 30 day free trial.
          </span>
          <Link to={"/register"}>Join the Community</Link>
        </article>
        <aside>
          <img src="src\pricing.jpg" alt="pricing.logo" />
        </aside>
      </section>
    </div>
  );
}
