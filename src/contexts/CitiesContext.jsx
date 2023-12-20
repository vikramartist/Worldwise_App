/* eslint-disable react/prop-types */
// @refresh reset
import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";
function CitiesProvider({ children }) {
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error in loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [currentCity, setCurrentCity] = useState({});

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error in loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        open: isOpen,
        handleOpen: setIsOpen,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext was used outside CitiesProvider");
  }

  return context;
};

const useFormatDate = (date, type) => {
  const dt = new Date(date);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[dt.getMonth()];
  const day = dt.getDate();
  const year = dt.getFullYear();
  const weekday = weekdays[dt.getDay()];
  if (type === 1) return `${month} ${day}, ${year}`;
  else if (type === 2) return `${weekday}, ${month} ${day}, ${year}`;
};

export { CitiesProvider, useCities, useFormatDate };
