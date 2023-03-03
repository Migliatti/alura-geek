import Button1 from "components/Button-1";
import styles from "./Header.module.css";
import logo from "assets/logo.svg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <Link to={"/"}>
          <img src={logo} alt="Logo da AluraGeek" className={styles.logo} />
        </Link>
        <label htmlFor="">
          <input type="search" placeholder="O que deseja encontrar?" />
          <FaSearch className={styles.icon} />
        </label>
      </div>
      <Link to="/login">
        <Button1 style={{ padding: "16px 5vw" }}>Login</Button1>
      </Link>
    </header>
  );
}

export default Header;
