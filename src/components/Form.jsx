/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";
import Button from "./Button";

const Form = () => {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  return (
    <section className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.text}>
          <label htmlFor="cityname">City name</label>
          <input
            name="cityname"
            id="cityname"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <div className={styles.text}>
          <label htmlFor="time">When did you go to {cityName}?</label>
          <input
            type="text"
            name="time"
            id="time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={styles.text}>
          <label htmlFor="notes">Notes about your trip to {cityName}</label>
          <textarea
            rows={5}
            cols={12}
            id="notes"
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <Button type="primary">Add</Button>
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
      </form>
    </section>
  );
};

export default Form;
