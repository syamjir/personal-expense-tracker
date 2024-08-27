import styles from "./Sidebar.module.css";
import { FaHome, FaDollarSign, FaChartLine, FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <h1>$P</h1>
        <h2>Pocket Finance</h2>
      </div>
      <div className={styles.sidebar__menu}>
        <ul>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? `${styles.sidebar__item} ${styles.active}`
                : styles.sidebar__item
            }
          >
            <FaHome className={styles.sidebar__icon} />
            Dashboard
          </NavLink>
          <NavLink
            to={"/transactions"}
            className={({ isActive }) =>
              isActive
                ? `${styles.sidebar__item} ${styles.active}`
                : styles.sidebar__item
            }
          >
            <FaList className={styles.sidebar__icon} />
            Transactions
          </NavLink>
          <NavLink
            to={"/incomes"}
            className={({ isActive }) =>
              isActive
                ? `${styles.sidebar__item} ${styles.active}`
                : styles.sidebar__item
            }
          >
            <FaDollarSign className={styles.sidebar__icon} />
            Incomes
          </NavLink>
          <NavLink
            to={"/expenses"}
            className={({ isActive }) =>
              isActive
                ? `${styles.sidebar__item} ${styles.active}`
                : styles.sidebar__item
            }
          >
            <FaChartLine className={styles.sidebar__icon} />
            Expenses
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
