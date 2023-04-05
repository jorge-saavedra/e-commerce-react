// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

import logo from "../../logojs-min.png";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img src={logo} alt="Logo de la empresa" />
      <ul style={{ display: "flex", gap: "30px" }}>
        <li>Todas Las remeras</li>
        <li>Hombres</li>
        <li>Mujeres</li>
      </ul>
      <CartWidget />
    </div>
  );
};
