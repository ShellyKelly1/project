import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ogurec } from "../store/ProductStore";
import "./css/ProductPage.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
const ProductPage = observer(() => {
  const { product, basket } = useContext(Context);
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const productTest = product.products.find((item) => item.id === productId);
  const isInBasket = basket.products.includes(productTest);
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    if (!isInBasket) {
      basket.setProduct(productTest);
      setIsClicked(true);
    }
  }

  return (
    <>
      <div className="product-main-div">
        <div className="product-main-imageandinfo">
          <div className="product-main-image">
            <img className="image" src={productTest.img}></img>
          </div>
          <div className="product-main-info">
            <p className="product-main-info-text">{productTest.name}</p>
            <p className="product-main-info-text">
              Калории: {productTest.calories}
            </p>
            <p className="product-main-info-text">Жиры: {productTest.fats}</p>
            <p className="product-main-info-text">
              Белки: {productTest.proteins}
            </p>
            <p className="product-main-info-text">
              Углеводы: {productTest.carbohydrates}
            </p>
            {productTest.type == 2 ? (
              <button
                className={`product-main-info-button ${
                  isClicked || isInBasket
                    ? "product-main-info-button-clicked"
                    : ""
                }`}
                onClick={handleClick}
              >
                {isClicked || isInBasket
                  ? "Добавлено"
                  : "Добавить в свои блюда"}
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductPage;
