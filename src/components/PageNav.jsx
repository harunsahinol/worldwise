import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export const PageNav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
