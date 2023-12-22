/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
import { v4 as uuid } from "uuid";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const Form = () => {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const { createCity, isLoading } = useCities();
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [geoCodingError, setGeoCodingError] = useState("");

  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchCityData() {
        try {
          setIsLoadingGeoCoding(true);
          setGeoCodingError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "The location doesn't seem like a city, please choose a proper city"
            );
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(data.countryCode);
        } catch (error) {
          setGeoCodingError(error.message);
        } finally {
          setIsLoadingGeoCoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !country) {
      return;
    }

    const newData = {
      id: uuid(),
      cityName,
      country,
      emoji: emoji.toLowerCase(),
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newData);
    navigate("/app/cities");
  }

  if (isLoadingGeoCoding) return <Spinner />;

  if (!lat && !lng)
    return (
      <Message message="Start by clicking somewhere on the map, or Try refreshing the page once" />
    );

  if (geoCodingError) return <Message message={geoCodingError} />;

  return (
    <section className={styles.formContainer}>
      <form
        className={`${styles.form} ${isLoading ? styles.form_text : ""}`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.text}>
          <label htmlFor="cityname">
            City &nbsp;&nbsp;&nbsp;
            <i className={`em em-flag-${emoji.toLowerCase()}`}></i>
          </label>
          <input
            name="cityname"
            id="cityname"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <div className={styles.text}>
          <label htmlFor="date">When did you go to {cityName}?</label>
          <DatePicker
            id="date"
            className="date-picker"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
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
        <div
          className={`${styles.buttons} ${
            isLoading ? styles.buttons_disabled : ""
          }`}
        >
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
