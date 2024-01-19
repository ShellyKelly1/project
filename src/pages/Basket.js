import React from 'react';
import { observer } from 'mobx-react-lite';
import './css/Basket.css'
import CardSetItem from "../components/CardSetItem.js";
import { ogurec } from "../store/ProductStore";
const Basket = observer(() => {
  const dish = {id: 1, name: "Блюдо", calories: 12, fats: 15, proteins: 20, carbohydrates: 30}
  return (
    <div className='basket-main-div'>
      <div className='basket-dishesAndButtons'>
        <div className='basket-dishes'>
          <CardSetItem product={dish}></CardSetItem>
          <CardSetItem product={dish}></CardSetItem>
          <CardSetItem product={dish}></CardSetItem>
          <CardSetItem product={dish}></CardSetItem>
        </div>
        <div className='basket-buttons'>
          <button className='button-recomendation'>Получить рекомендацию</button>
          <button className='button-add'>Заявка на добавление блюда</button>
        </div>
      </div>
    </div>
  );
});

export default Basket;
