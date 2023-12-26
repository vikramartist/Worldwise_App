import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect } from "react";
import { useCities, useFormatDate } from "../contexts/CitiesContext";
import Button from "./Button";
import Spinner from "./Spinner";

const City = () => {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();
  const { cityName, emoji, date, notes } = currentCity;
  const formattedDate = useFormatDate(date, 2);
  const navigate = useNavigate();

  useEffect(
    function () {
      getCity(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, getCity]
  );

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <section>
          <i className={`em em-flag-${emoji}`}></i>
          <p className={styles.text}>{cityName}</p>
        </section>
      </div>
      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p className={styles.inner_text}>{formattedDate}</p>
      </div>
      <div className={styles.row}>
        <h6>Your Notes</h6>
        <p className={styles.inner_text}>{notes}</p>
      </div>
      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Check out {cityName} on wikipedia &rarr;
        </a>
      </div>
      <div className={styles.row}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          type="backward"
        >
          &larr; Back
        </Button>
      </div>
    </div>
  );
};

export default City;
