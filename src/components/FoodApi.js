import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

const FoodApi = () => {
  const [foods, setFoods] = useState([]);

   useEffect(() => {
    const apiUrl = "https://asm-dev-api.herokuapp.com/api/v1/food";
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => setFoods(data.data.meals));
  }, []);

  return (
    <section>
      <div className="card-list">
        {foods.slice(0, 8).map((food) => (
          <FoodCard
            key={food.id}
            title={food.title}
            strMealThumb={food.strMealThumb}
            strMeal={food.strMeal}
            price={food.price}
            description={food.description}
            ratings={food.ratings}
          />
        ))}
      </div>
      <button className="button">learn more</button>
    </section>
  );
};

export default FoodApi;
