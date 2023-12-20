/* eslint-disable no-unused-vars */

import Map from "../components/Map";
import SideBar from "../components/SideBar";
import styles from "./AppLayout.module.css";
import { useCities } from "../contexts/CitiesContext";

export default function AppLayout() {
  const { open } = useCities();

  return (
    <div className={styles.app}>
      {open ? <SideBar /> : ""}
      <Map />
    </div>
  );
}
