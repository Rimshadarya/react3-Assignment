import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, title,price,description,category,image,rate,count }) => {
  return (
    <div className={styles.divContainer}>
      <h4>{id}</h4>
      <h2>{title}</h2>
      <h1>{price}</h1>
      <p>{description}</p>
      <h6>{category}</h6>
      <img className={styles.img}src={image}/>
      {<p>{rate}</p>}
    </div>
  );
};

export default Card;