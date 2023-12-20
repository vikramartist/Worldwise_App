import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <div className={styles.product}>
      <Navbar />
      <section>
        <aside>
          <img src="src\product-bg.jpg" alt="forest-logo" />
        </aside>
        <article>
          <h1>About Worldwise</h1>
          <span>
            Worldwise is a website that allows users to find different places or
            spots on the map and add them to their list for further use. The
            website is a great tool for people who love to travel and explore
            new places. With Worldwise, you can easily search for any location
            on the map and add it to your list. The website also allows you to
            share your list with others, making it easy to plan trips with
            friends and family. Worldwise is a user-friendly website that is
            easy to navigate. It is a great resource for anyone who wants to
            discover new places and create a personalized travel itinerary.
            Whether you are planning a weekend getaway or a long vacation,
            Worldwise can help you find the perfect destination. Give it a try
            and start exploring the world today!
          </span>
          <Link to={"/app"}>Explore</Link>
        </article>
      </section>
    </div>
  );
}
