import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import "./css/Basket.css";
import CardSetItem from "../components/CardSetItem.js";
import { Context } from "..";
import { Link } from "react-router-dom";
import { ADD_DISH_ROUTE } from "../utils/consts";

const NORMAL_CALORIES_SUM = 2000;
const NORMAL_FATS_SUM = 1000;
const NORMAL_PROTEINS_SUM = 100;
const NORMAL_CARBOHYDRATES_SUM = 1000;

const getSummary = ({ calories, fats, proteins, carbohydrates }) => {
  const result = [];
  if (calories > NORMAL_CALORIES_SUM) {
    result.push(
      `You are a CALORIES motherfucker ${calories}. Normal value is: ${NORMAL_CALORIES_SUM}`
    );
  }

  if (fats > NORMAL_FATS_SUM) {
    result.push(
      `You are a FATS motherfucker ${fats}. Normal value is: ${NORMAL_FATS_SUM}`
    );
  }

  if (proteins > NORMAL_PROTEINS_SUM) {
    result.push(
      `You are a PROTEINS motherfucker ${proteins}. Normal value is: ${NORMAL_PROTEINS_SUM}`
    );
  }

  if (carbohydrates > NORMAL_CARBOHYDRATES_SUM) {
    result.push(
      `You are a CARBOHYDRATES motherfucker ${carbohydrates}. Normal value is: ${NORMAL_CARBOHYDRATES_SUM}`
    );
  }

  return result;
};

const Basket = observer(() => {
  const { basket } = useContext(Context);
  const products = basket.products;

  const getRecommendation = () => {
    const calculations = products.reduce(
      (acc, product) => ({
        calories: acc.calories + product.calories,
        fats: acc.fats + product.fats,
        proteins: acc.proteins + product.proteins,
        carbohydrates: acc.carbohydrates + product.carbohydrates,
      }),
      {
        calories: 0,
        fats: 0,
        proteins: 0,
        carbohydrates: 0,
      }
    );

    alert(
      `Calories: ${calculations.calories}, ${calculations.fats}, ${calculations.proteins}, ${calculations.carbohydrates}\n` +
        getSummary(calculations).join("\n")
    );
  };

  return (
    <div className="basket-main-div">
      {products.length ? (
        <div className="basket-dishesAndButtons">
          <div className="basket-dishes">
            {products.map((product) => (
              <CardSetItem key={product.id} product={product}></CardSetItem>
            ))}
          </div>
          <div className="basket-buttons">
            <button
              className="button-recomendation"
              onClick={getRecommendation}
            >
              Получить рекомендацию
            </button>
            <Link
              to={ADD_DISH_ROUTE}
              onClick={() => {
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <button className="button-add">Заявка на добавление блюда</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="basket-dishesAndButtons">
          В КОРЗИНЕ НИЧЕГО НЕТ
          <Link
            to={ADD_DISH_ROUTE}
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <button className="button-add">Заявка на добавление блюда</button>
          </Link>
        </div>
      )}
    </div>
  );
});

export default Basket;
