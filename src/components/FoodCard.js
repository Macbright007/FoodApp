import React from "react";
import ReactStars from "react-rating-stars-component";

const FoodCard = ({
  strMeal,
  strMealThumb,
  description,
  title,
  price,
  ratings,
}) => {
  return (
    <div className="card-container">
      <img src={strMealThumb} alt="" className="hero-img" />
      <div className="header">
        <h2> {title}</h2>
        <h2> {price}</h2>
      </div>
      <div className="subheader">
        <p> {strMeal}</p>
        <p> {description}</p>
      </div>

      <div className="card-bottom">
        <ReactStars
          count={4}
          size={24}
          activeColor="#ffd700"
          edit={false}
          value={ratings}
        />
        <button className="add-button">+</button>
      </div>
    </div>
  );
};

export default FoodCard;
