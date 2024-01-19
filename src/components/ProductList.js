// import { observer } from 'mobx-react-lite';
// import { useContext } from 'react';
// import { Context } from '../index';
// import CardSetItem from '../components/CardSetItem.js'
// import './css/ProductList.css';

// const ProductList = observer(() => {
// 	const { product } = useContext(Context);

// 	return (
// 		<div className='Catalog-Main-ItemsAndFilters-Items'>
//             {product.selectedType == null ? (
// 					[...product.products, ...product.dishes].map((product) => (
// 				<CardSetItem key={product.id} product={product} />
// 			))) :
// 			(
// 				product.dishes.map((dish) => (
// 				<CardSetItem key={dish.id} product={dish} />
// 			)))}
// 		</div>
// 	);
// });

// export default ProductList;

// // {product.products.map((product) => (
// // 				<CardSetItem key={product.id} product={product} />
// // 			))}
//             // {product.dishes.map((dish) => (
// 			// 	<CardSetItem key={dish.id} product={dish} />
// 			// ))}

import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import CardSetItem from "../components/CardSetItem.js";
import "./css/ProductList.css";

const getItems = (product) => {
  switch (product.selectedType) {
    case null:
      return product.products;
    case 1:
      return product.products.filter(product=> product.type === 1);
    case 2:
      return product.products.filter(product=> product.type === 2);
    default:
      return [];
  }
};

const ProductList = observer(() => {
  const { product } = useContext(Context);

  return (
    <div className="Catalog-Main-ItemsAndFilters-Items">
      {getItems(product).map((product) => (
        <CardSetItem key={product.id} product={product} />
      ))}
    </div>
  );
});

export default ProductList;

// {product.products.map((product) => (
// 				<CardSetItem key={product.id} product={product} />
// 			))}
// {product.dishes.map((dish) => (
// 	<CardSetItem key={dish.id} product={dish} />
// ))}
