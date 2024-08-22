import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
function Card({ color, Icon, heading, title, name, cash }) {
  return (
    <div>
      <div className={styles.card}>
        {Icon && <Icon className={styles.card__icon} />}
        {heading && <h4>{`${title ? title : heading}`}</h4>}
        {name && <p className={styles.card__name}>{name}</p>}
        {cash !== undefined && (
          <p
            className={`${styles.card__cash} ${styles[`card__cash--${color}`]}`}
          >
            {`${heading === "Debit" ? "-" : "+"}₹${cash}`}
          </p>
        )}
      </div>
    </div>
  );
}
// prop validation
Card.propTypes = {
  color: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cash: PropTypes.number.isRequired,
};

export default Card;
