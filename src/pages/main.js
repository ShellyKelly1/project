import React from 'react';
import TypeBar from '../components/TypeBar'
import ProductList from '../components/ProductList';
import './css/Main.css'
import { observer } from 'mobx-react-lite';
const Main = observer(() => {
  return (
    <>
    <div className='MainDiv'>
    <TypeBar/>
    <ProductList/>
    </div>
    </>
  );
});
export default Main;
