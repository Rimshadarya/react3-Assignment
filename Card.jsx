import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, title, price, description, category, image, rating }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.details}>
        <h4 className={styles.id}>ID: {id}</h4>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.price}>Price: {price}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>Category: {category}</p>
        <div className={styles.rating}>
          <span>Rating: {rating.rate} </span>
          <span>({rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
