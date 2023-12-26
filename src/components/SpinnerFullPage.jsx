import styles from "./SpinnerFullPage.module.css";
import Spinner from "./Spinner";

const SpinnerFullPage = () => {
  return (
    <div className={styles.spinnerFullPage}>
      <Spinner />
    </div>
  );
};

export default SpinnerFullPage;
