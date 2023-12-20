import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <p>Welcome to Worldwise App 🙏</p>
      <br />
      <pre>Click on the Map to add cities.</pre>
    </div>
  );
};

export default Welcome;
