/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faLocation } from "@fortawesome/free-solid-svg-icons";
import useGeolocation from "../hooks/useGeolocation";
import Button from "./Button";
import User from "./User";

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState([
    12.972442, 77.580643,
  ]);
  const { open, handleOpen, cities } = useCities();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setCurrentPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition.lat && geolocationPosition.lng)
        setCurrentPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!open && (
        <span onClick={() => handleOpen((v) => !v)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      )}
      {!geolocationPosition && (
        <Button
          type={open ? "position-open" : "position-close"}
          onClick={getPosition}
        >
          {isLoadingPosition ? "Loading.." : "Use Your Position 📍"}
        </Button>
      )}
      <User />
      <MapContainer
        center={currentPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <section>
                <img src={city.emoji} alt={city.cityName} />
                <span>{city.cityName}</span>
              </section>

              <a
                href={`https://en.wikipedia.org/wiki/${city.cityName}`}
                target="_blank"
                rel="_ noreferrer"
                className={styles.link}
              >
                Click to Know More
              </a>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={currentPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, 10);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
