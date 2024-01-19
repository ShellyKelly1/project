import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";
import "./css/CardSetItem.css";

const CardSetItem = ({ product }) => {
  return (
    <div className="CardSetItem">
      <div className="CardSetItem-content">
        <div className="CardSetItem-content-image-div">
          <img
            className="CardSetItem-content-image"
            // src={process.env.REACT_APP_API_URL + product.img}
            src={product.img}
          />
        </div>
        <div className="CardSetItem-content-label-content">
          <p className="CardSetItem-content-label">{product.name}</p>
          <p className="CardSetItem-content-label">
            Калории: {product.calories}
          </p>
          <p className="CardSetItem-content-label">Жиры: {product.fats}</p>
          <p className="CardSetItem-content-label">Белки: {product.proteins}</p>
          <p className="CardSetItem-content-label">
            Углеводы: {product.carbohydrates}
          </p>
          <div className="buttons">
            <button className="button-accept">Принять</button>
            <button className="button-delete">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardSetItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CardSetItem;
