import React from "react";
import styles from "./EmployeeCard.module.scss";
const EmployeeCard = ({ img, name, desc, onClick }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <img src={img} alt="card" />
          <h2 className={styles.cardTitle}>{name}</h2>
          <p className={styles.cardDescription}>{desc}</p>
        </div>
        <button className={styles.cardBtn} onClick={onClick}>
          View
        </button>
      </div>
    </>
  );
};

export default EmployeeCard;
